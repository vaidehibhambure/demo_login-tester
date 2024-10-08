import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Anchor,
  Box,
  Button,
  Group,
  PasswordInput,
  TextInput,
  Center,
  Text
} from '@mantine/core'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageTitle'
import PageWrapper from '../components/PageWrapper'
import { axiosInstance, persistUserCredentialsToCookies } from '../utils/api'
import { customNotification } from '../utils/customNotification'
import {
  DOCTORURL,
  PATIENTURL,
  ROUTES,
  SYSADMIN,
  PROVIDERADMIN
} from '../utils/routes'
import { ILoginReq, ILoginRes, SSOLogin } from '../utils/types'
import { Signin } from '../utils/validation'
import { useTranslation } from 'react-i18next'
import { useGoogleLogin } from '@react-oauth/google'
import GoogleButton from 'react-google-button'
import axios, { AxiosError } from 'axios'

const PROVIDER_NAME = import.meta.env.VITE_PROVIDER_NAME

const Login = () => {
  const { t, ready } = useTranslation(['default'])
  if (!ready) {
    return null
  }

  const authenticateUser = async (data: ILoginReq) => {
    const response = await axiosInstance<ILoginReq, ILoginRes>(
      ROUTES.login,
      'POST',
      data
    )
    return response.data
  }

  const authenticateSSOUser = async (data: SSOLogin) => {
    try {
      const response = await axiosInstance<SSOLogin, ILoginRes>(
        ROUTES.ssoLogin,
        'POST',
        data
      )
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError
        if (axiosError.response) {
          const message =
            axiosError.response.data.errors?.[0]?.message ||
            axiosError.response.data.message
          customNotification({
            title: t('login-error') as string,
            message: message.includes(t('login-creds'))
              ? (t('login-account-exists') as string)
              : (message as string),
            type: 'error'
          })
        }
      } else if (error instanceof Error) {
        customNotification({
          title: t('login-error') as string,
          message: error.message,
          type: 'error'
        })
      } else {
        customNotification({
          title: t('login-error') as string,
          message: t('unexpected-error') as string,
          type: 'error'
        })
      }
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginReq>({
    mode: 'onBlur',
    resolver: zodResolver(Signin)
  })

  const { mutateAsync: mutateAsyncLogin, isLoading } = useMutation(
    authenticateUser,
    {
      onSuccess: async (data) => {
        if (data) {
          redirectResponse(data)
        }
      },
      onError: (error) => {
        handleError(error)
      }
    }
  )

  const { mutateAsync: mutateAsyncSSO } = useMutation(authenticateSSOUser, {
    onSuccess: async (data) => {
      if (data) {
        redirectResponse(data)
      }
    },
    onError: (error) => {
      handleError(error)
    }
  })

  const onSubmit = async (data: ILoginReq) => {
    await mutateAsyncLogin(data)
  }

  const onSSOLogin = useGoogleLogin({
    onSuccess: async (data: SSOLogin) => {
      await mutateAsyncSSO(data)
    }
  })

  const handleError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError
      if (axiosError.response) {
        customNotification({
          title: t('login-error') as string,
          message: axiosError.response.data.message as string,
          type: 'error'
        })
      }
    } else if (error instanceof Error) {
      customNotification({
        title: t('login-error') as string,
        message: error.message,
        type: 'error'
      })
    } else {
      customNotification({
        title: t('login-error') as string,
        message: t('unexpected-error') as string,
        type: 'error'
      })
    }
  }

  const redirectResponse = async (data: ILoginRes) => {
    await persistUserCredentialsToCookies(data)

    const redirectUrls = {
      SYSTEMADMIN: SYSADMIN,
      PROVIDERADMIN: PROVIDERADMIN,
      DOCTOR: DOCTORURL,
      PATIENT: PATIENTURL
    }

    for (const [role, url] of Object.entries(redirectUrls)) {
      if (data.role.includes(role)) {
        customNotification({
          title: t('login-success') as string,
          message: t(`login-redirect-${role.toLowerCase()}`) as string,
          type: 'success'
        })
        window.location.replace(url)
        break
      }
    }
  }

  return (
    <PageWrapper>
      <PageHeader
        // description={t('login-description-header') as string}
        title={t('login-description-header') as string}
      />

      <Center mt='lg'>
        <GoogleButton
          style={{
            width: '300px',
            marginBottom: '10px'
          }}
          onClick={onSSOLogin}
        />
      </Center>

      <PageHeader
        link='/signup'
        label={t('login-createacc-header') as string}
        title=''
      />

      <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '10px' }}>
        <Box mb='xl'>
          <TextInput
            size='lg'
            label={t('login-form-email')}
            placeholder={t('login-form-email-placeholder')}
            required
            {...register('email')}
            error={errors.email?.message}
            // description={t('login-form-email-enter')}
          />

          <PasswordInput
            size='lg'
            label={t('login-form-password')}
            // description={t('login-form-password-desc')}
            {...register('password')}
            error={errors.password?.message}
            placeholder={t('login-form-password-placeholder')}
            required
            mt='lg'
          />
          <Text
            size='xs'
            style={{
              fontStyle: 'italic',
              marginTop: '1.0rem'
            }}
          >
            By signing up, you agree to {PROVIDER_NAME} and Carelyo{' '}
            <Anchor to='/privacy-policy' size='xs' component={Link}>
              {t('footer-privacy-policy')}
            </Anchor>{' '}
            and{' '}
            <Anchor to='/terms-of-service' size='xs' component={Link}>
              {t('footer-tos')}
            </Anchor>
            .
          </Text>

          <Button size='lg' loading={isLoading} fullWidth mt='xs' type='submit'>
            {t('login-signin')}
          </Button>
          <Group position='right' mt='xs'>
            <Anchor to='/forgot-password' size='xs' component={Link}>
              {t('login-form-password-forgot')}
            </Anchor>
          </Group>
        </Box>
      </form>
    </PageWrapper>
  )
}

export default Login