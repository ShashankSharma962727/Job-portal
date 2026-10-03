import React from 'react'
import Navbar from '../components/ui/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/ui/Footer'

const ProfileLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default ProfileLayout