import React, { useState } from 'react'

import Card from "../../components/Card"

import grid_img from "../../assets/HomeImg/grid.png"
import Button from "../../components/Button"
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import CodeCard from "../../components/CodeCard"



const Banner = ({ clr, _clr }) => {
  const [isHover, setIsHover] = useState(0);
  const handleMouseEnter = (x) => {
    setIsHover(x);
  };
  const handleMouseLeave = () => {
    setIsHover(0);
  };

 
  const btn_name = "Getting Started"
  const color = clr;
  // style={{ backgroundImage: `url(${grid_img})` }}
  return (
    <section id="banner">
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-20 space-y-0 md:space-y-0 md:flex-row">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h1 className='text-4xl text-center md:text-5xl font-Rajdhani__bold md:text-left'>
              We help clients
              solve business problems by fusing
              <span style={{ color: `${clr}` }}> creativity, innovation, </span> and <span style={{ color: `${clr}` }}>strategy.</span>
            </h1>
            <p className={`font-Rajdhani font-semibold`} style={{ color: `${clr}` }}>
              Say Hello

              to the new web presence of your business
              We are working to initiate your business
              We work every day, people love us
            </p>

            <div className="hidden md:block">
              <Button name={btn_name} clr={color} />
            </div>
            <div className="hidden md:block">
              <div className="flex space-x-4">
                <TelegramIcon
                  style={{ color: isHover == 1 ? "white" : `${clr}`, backgroundColor: isHover == 1 ? `${color}` : '' }}
                  className={`hover:text-white hover:rounded-md hover:cursor-pointer`}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={handleMouseLeave}
                />
                <GitHubIcon
                  style={{ color: isHover == 2 ? "white" : `${clr}`, backgroundColor: isHover == 2 ? `${color}` : '' }}
                  className={`hover:text-white hover:rounded-md hover:cursor-pointer`}
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={handleMouseLeave}
                />
                <TwitterIcon
                  style={{ color: isHover == 3 ? "white" : `${clr}`, backgroundColor: isHover == 3 ? `${color}` : '' }}
                  className={`hover:text-white hover:rounded-md hover:cursor-pointer`}
                  onMouseEnter={() => handleMouseEnter(3)}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
            </div>

          </div>


          <div className='md:w-1/2 mb-60 -mt-12 md:mb-2'>
            <CodeCard clr={clr} />
          </div>

        </div>
      </div>
     
      <br />
    </section>
  )
}

export default Banner