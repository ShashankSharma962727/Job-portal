
import Navbar from '../components/ui/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/ui/Footer'

const RecruiterLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RecruiterLayout