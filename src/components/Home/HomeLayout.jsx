import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
import Technology from './Technology'
import Tools from './Tools'
import GettingStarted from './GettingStarted'

// linear-gradient(135deg,
//   #00AB55 0%,
//   #007B55 100%)

const HomeLayout = () => {
  return (
    <>
      <div>
        <Header />
        <Banner />
        <Technology />
        {/* <Tools /> */}
        <GettingStarted />
       
      </div>
      <Footer />



    </>
  )
}

export default HomeLayout