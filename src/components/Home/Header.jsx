import React from 'react'
import logo from "../../assets/HomeImg/react.svg"
import menuicon from "../../assets/HomeImg/burger_menu.png"


const Header = () => {

  window.onscroll = () => {
    if (window.scrollY === 0) {
      document.getElementById("header__section").classList.remove('shadow-lg')
    } else {
      document.getElementById("header__section").classList.add('shadow-lg')
    }
  }

  return (
    <div id="header__section" className="z-[100] sticky top-0"> 
      <nav className="container p-6 mx-auto font-Rajdhani font-bold bg-white">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <p className='text-4xl font-bold text-[#007B55]'>Coding<span>Spell</span></p>
          </div>
          <div className="hidden space-x-6 md:flex">
            <a href="#" class="hover:text-darkGrayishBlue">Pricing</a>
            <a href="#" class="hover:text-darkGrayishBlue">Product</a>
            <a href="#" class="hover:text-darkGrayishBlue">About Us</a>
            <a href="#" class="hover:text-darkGrayishBlue">Careers</a>
            <a href="#" class="hover:text-darkGrayishBlue">Community</a>
          </div>
          <div className="hidden font-Rajdhani green_bg p-3 px-6 pt-2 pb-2 text-white rounded-full hover:text-textc hover:border-textc border-2 md:block">GettingStarted</div>
          <div className='block md:hidden focus:outline-none'>
            <img src={menuicon} height={40} width={40} />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header