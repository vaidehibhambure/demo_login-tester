import {
  Anchor,
  Box,
  Modal,
  Stack,
  Text,
  Title,
  createStyles
} from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import Cookies from 'js-cookie'
import { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { CookiesBanner } from '../components/CookieBanner'
import Footer from '../components/Footer'
import LoggedIn from '../components/LoggedIn'

const Layout = () => {
  const accepted = Cookies.get('ca_carelyo_cookies_has-accepted')
  const [opened, { open, close }] = useDisclosure(false)
  const mobile = useMediaQuery('(max-width: 625px)')
  const { classes } = useStyles()

  const leftContainerRef = useRef(null)

  useEffect(() => {
    if (!accepted) {
      open()
    }
  }, [accepted])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    })

    if (leftContainerRef.current) {
      observer.observe(leftContainerRef.current)
    }

    return () => {
      if (leftContainerRef.current) {
        observer.unobserve(leftContainerRef.current)
      }
    }
  }, [])

  const handleAccept = () => {
    Cookies.set('ca_carelyo_cookies_has-accepted', 'true', { expires: 365 })
    close()
  }

  return (
    <Box
      sx={(theme) => ({
        height: '100vh',
        display: `${mobile ? 'block' : 'flex'}`,
        flexWrap: 'wrap',
        position: 'relative',

      })}
    >
      <Box
        ref={leftContainerRef}
        bg={'#3a4844'}
        className={`${classes.leftContainer} lazy-background`}
      >
        <Stack justify='space-between' h={'100%'} w={'80%'} m='0px auto'>
          <Anchor
            href={import.meta.env.VITE_CLIENT_URL || '#'}
            my={50}
            target='_blank'
            sx={{
              textDecoration: 'none',
              ':hover': { textDecoration: 'none' }
            }}
          >
            <Title weight={700} color='white' align='left' order={1}>
              {import.meta.env.VITE_TITLE || 'Company name'}
            </Title>
            <Text italic size={mobile ? 20 : 'sm'} align='left' color='white'>
              {import.meta.env.VITE_SLOGAN || 'Company slogan'}
            </Text>
          </Anchor>
        </Stack>
      </Box>
      <Box sx={{ flex: 1, padding: 0, gap: 16, margin: 'auto 0px' }}>
        <Outlet />
        <LoggedIn />
        <Footer />
      </Box>

      <Modal opened={opened} onClose={close} title='Cookies'>
        <CookiesBanner accept={handleAccept} />
      </Modal>
    </Box>
  )
}

const useStyles = createStyles((theme) => ({
  leftContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    flex: 1,
    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      pointerEvents: 'none',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      opacity: 0.2,
      backgroundImage: 'none', // Start with no background image
      transition: 'background-image 0.3s ease-in-out' // Smooth transition when image loads
    },
    '&.visible::before': {
      backgroundImage: `url(${import.meta.env.VITE_BACKGROUND_IMAGE_URL})` // Lazy load image from env variable
    },
    [`@media (max-width:625px)`]: {
      height: '50%',
    }
  },
  poweredByText: {
    fontSize: theme.fontSizes.md,
    [`@media (min-width:625px)`]: {
      fontSize: theme.fontSizes.lg
    },
    [`@media (min-width:1050px)`]: {
      fontSize: theme.fontSizes.xl
    }
  },
  logoSize: {
    fontSize: theme.fontSizes.xl,
    [`@media (min-width:625px)`]: {
      fontSize: theme.fontSizes.xl
    },
    [`@media (min-width:1050px)`]: {
      fontSize: theme.fontSizes.xl
    }
  }
}))

export default Layout
