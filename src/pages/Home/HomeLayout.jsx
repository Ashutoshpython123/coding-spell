import React, { useState, useEffect } from 'react'
import Presets from "../../components/Presets"
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
import Technology from './Technology'
import Tools from './Tools'
import GettingStarted from './GettingStarted'

const colorg = ["#00AB55","#007B55"]
const colorv = ["#7635dc", "#4202A7"]
const colorr = ["#FF3030", "#B50303"]
const colory = ['#fda92d', "#A96604"]
const colorb = ['#2065D1', "#063A8D"]
const colorl = ['#1CCAFF', "#04779B"]
const HomeLayout = () => {
  const [clr, setClr] = useState("#00AB55")
  const [_clr, _setClr] = useState("#007B55")


  const changeColor = (color, _color) => {
    setClr(color)
    _setClr(_color)
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen fixed left-1'>
        <div className='flex flex-col pl-2 space-y-3'>
          <div onClick={() => changeColor(colorg[0], colorg[1])}>
            <div className={`rounded-full border-0 flex p-2 bg-[#00AB55] hover:cursor-pointer`}></div>
          </div>
          <div onClick={() => changeColor(colorv[0], colorv[1])}>
            <div className={`rounded-full border-0 flex p-2 bg-[#7635dc] hover:cursor-pointer`}></div>
          </div>
          <div onClick={() => changeColor(colorr[0], colorr[1])}>
            <div className={`rounded-full border-0 flex p-2 bg-[#FF3030] hover:cursor-pointer`}></div>
          </div>
          <div onClick={() => changeColor(colory[0], colory[1])}>
            <div className={`rounded-full border-0 flex p-2 bg-[#fda92d] hover:cursor-pointer`}></div>
          </div>
          <div onClick={() => changeColor(colorb[0], colorb[1])}>
            <div className={`rounded-full border-0 flex p-2 bg-[#2065D1] hover:cursor-pointer`}></div>
          </div>
          <div onClick={() => changeColor(colorl[0], colorl[1])}>
            <div className={`rounded-full border-0 flex p-2 bg-[#1CCAFF] hover:cursor-pointer`}></div>
          </div>
        </div>
      </div>

      <div>
        <Header clr={clr} />
        <Banner clr={clr} _clr={_clr} />
        <Technology clr={clr} _clr={_clr}/>
        {/* <Tools /> */}
        <GettingStarted clr={clr} _clr={_clr} />

      </div>
      <Footer clr={clr} _clr={_clr} />



    </>
  )
}

export default HomeLayout