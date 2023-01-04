import React from 'react'
import logo from "../../assets/HomeImg/react.svg"
import menuicon from "../../assets/HomeImg/burger_menu.png"
import Button from "../../components/Button"


const Header = ({clr}) => {

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
            <p className={`text-4xl font-bold`} style={{color : `${clr}`}}>Coding<span>Spell</span></p>
          </div>
          <div className="hidden space-x-6 md:flex">
            <a href="#" class={`hover:text-[${clr}] ease-in duration-300`}>Pricing</a>
            <a href="#" class={`hover:text-[${clr}] ease-in duration-300`}>Product</a>
            <a href="#" class={`hover:text-[${clr}] ease-in duration-300`}>About Us</a>
            <a href="#" class={`hover:text-[${clr}] ease-in duration-300`}>Careers</a>
            <a href="#" class={`hover:text-[${clr}] ease-in duration-300`}>Community</a>
          </div>
          <div className="hidden md:block">
            <Button name="Getting Started" clr={clr} />
          </div>

          <div className='block md:hidden focus:outline-none'>
            <img src={menuicon} height={40} width={40} />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header