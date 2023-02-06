import React from 'react'
import { Navigate } from 'react-router-dom'
import { getTokenType } from './../utils/storage'
import { appPath } from './appPath'

const PrivateRoute = ({ children }: any) => {
  const isAuthenticated = () => {
    const token = getTokenType()
    if (token) return true
    return false
  }

  return isAuthenticated() ? children : <Navigate to={appPath.login} />
}

export default PrivateRoute
