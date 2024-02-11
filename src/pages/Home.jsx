import React from 'react'

// components
import Hero from '../components/Hero'
import HoverClicks from '../components/HoverClicks'
import LatsestProducts from '../components/LatsestProducts'
import EmailSignUp from '../components/EmailSignUp'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
        <Hero />
        <HoverClicks />
        <LatsestProducts />
        <EmailSignUp />
        <Footer />
    </>
  )
}

export default Home
