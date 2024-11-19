import React from 'react'
import Login from './Login/Login'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default MainLayout