import React from 'react'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'

const Layout = () => {
  return (
    <div className='px-3 sm:px-6 md:px-14 lg:px-12 xl:px-28 2xl:px-[10rem] flex flex-col gap-y-8 md:gap-y-12 2xl:gap-y-60'>
        
        {/* Navbar */}
        <Navbar />

        {/* Home */}
        <Home />
    </div>
  )
}

export default Layout