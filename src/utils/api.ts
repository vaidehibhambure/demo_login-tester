
import axios, { AxiosPromise } from 'axios'
import Cookies from 'js-cookie'
import { CookieAttributes } from 'js-cookie'
import {
  API_URL,
  DOCTORURL,
  DOMAIN,
  PATIENTURL,
  PROVIDERADMIN,
  SYSADMIN
} from './routes'
import { ILoginRes } from './types'

export function axiosInstance<T, R>(
  path: string,
  type: 'GET' | 'POST' | 'PUT',
  body: T
): AxiosPromise<R> {
  const config = {
    url: API_URL + path,
    method: type,
    data: body,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  console.log(`Making ${type} request to ${config.url} with body:`, body);

  return axios(config).catch(error => {
    if (error.response) {
      console.error('Server responded with a status code that falls out of the range of 2xx:', error.response.status, error.response.data);
    } else if (error.request) {
      console.error('The request was made but no response was received:', error.request);
    } else {
      console.error('Something happened in setting up the request that triggered an Error:', error.message);
    }
    console.error('Config:', error.config);
    throw error; // Rethrow the error so the calling function can handle it
  });
}

export function CookieOptions(): CookieAttributes {
  if (import.meta.env.MODE === 'development') {
    return {
      path: '/',
      sameSite: 'Lax'
    }
  } else {
    return {
      path: '/',
      sameSite: 'Strict',
      secure: true,
      domain: DOMAIN
    }
  }
}

export const persistUserCredentialsToCookies = async (user: ILoginRes) => {
  const { token, userId, id, role, profilePhoto } = user
  const options = CookieOptions()

  Cookies.set(`${role}_id`, id.toString(), options)
  Cookies.set(`${role}_userId`, userId.toString(), options)
  Cookies.set(`${role}_token`, token, options)
  if (role.includes('PROVIDERADMIN')) {
    Cookies.set('admin-type', 'PROVIDER', options)
  } else {
    Cookies.set('admin-type', 'SYSTEM', options)
  }
}

type LoggedInData = { id: string; url: string; text: string; avatar: string }

export const getIdsFromCookies = () => {
  const patient = Cookies.get('PATIENT_id')
  const doctor = Cookies.get('DOCTOR_id')
  const systemadmin = Cookies.get('SYSTEMADMIN_id')
  const provideradmin = Cookies.get('PROVIDERADMIN_id')
  let data: LoggedInData[] = []
  if (patient) {
    data.push({
      id: patient,
      url: PATIENTURL,
      text: 'Patient ',
      avatar: '/assets/patient.svg'
    })
  }
  if (doctor) {
    data.push({
      id: doctor,
      url: DOCTORURL,
      text: 'Doctor',
      avatar: '/assets/doctor.svg'
    })
  }
  if (systemadmin) {
    data.push({
      id: systemadmin,
      url: SYSADMIN,
      text: 'Admin',
      avatar: '/assets/hospital.svg'
    })
  }
  if (provideradmin) {
    data.push({
      id: provideradmin,
      url: PROVIDERADMIN,
      text: 'ProviderAdmin',
      avatar: '/assets/hospital.svg'
    })
  }
  return data
}
