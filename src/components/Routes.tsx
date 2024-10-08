'use client';

import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '../layout'
import Login from '../pages/Login'
import ForgotPassword from '../pages/ForgotPassword'
import Register from '../pages/Register'
import NewPassword from '../pages/NewPassword'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import TermsAndConditions from '../pages/TermsAndConditions'

const NavRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index={true} element={<Login />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
        <Route path='signup' element={<Register />} />
        <Route path='reset-password' element={<NewPassword />} />
        <Route path='privacy-policy' element={<PrivacyPolicy />} />
        <Route path='terms-of-service' element={<TermsAndConditions />} />
      </Route>
      <Route path='*' element={<Navigate to='/' replace={true} />} />
    </Routes>
  )
}

export default NavRoutes
