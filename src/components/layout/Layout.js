import React from 'react'
import Footer from '../footer/Footer'
import HeaderPage from '../header/Header'

const Layout = ({children}) => {
  return (
    <>
        <HeaderPage />
        {children}
        <Footer />
    </>
  )
}

export default Layout
