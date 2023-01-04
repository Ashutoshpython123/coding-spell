import React from 'react'

import SectionHeader from '../../components/SectionHeader'
import Card from "../../components/Card"

import grid_img from "../../assets/HomeImg/grid.png"
import tailwind_img from "../../assets/tech/tailwind.png"
import node_img from "../../assets/tech/nodejs.png"
import type_img from "../../assets/tech/type.png"
import solidity_img from "../../assets/tech/solidity.png"
import js_img from "../../assets/tech/jd.png"
import py_img from "../../assets/tech/py.png"
import rust_img from "../../assets/tech/rust.png"
import ex_img from "../../assets/tech/ex.png"
import react_img from "../../assets/HomeImg/react.svg"
import next_img from "../../assets/tech/next.png"
import nest_img from "../../assets/tech/nest.jpg"
import html_img from "../../assets/tech/html.jpg"
import appdev from "../../assets/HomeImg/appdev.png"
import blockdev from "../../assets/HomeImg/blockdev.png"


const Technology = ({ clr, _clr }) => {
  return (
    <section className='px-2 md:mx-12'>
      <SectionHeader name={'SERVICES'} clr={clr} />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-5'>
      <Card imgOne={js_img} clr={clr} _clr={_clr} />
      <Card imgOne={js_img} clr={clr} _clr={_clr} />
      <Card imgOne={js_img} clr={clr} _clr={_clr} />
      </div>
      <SectionHeader name={'TECHNOLOGY'} clr={clr} />
      <div>
        <div className='flex mx-auto'>
          <div className='w-1/2'>
            <img className="animate-wiggle" src='https://berrydashboard.io/static/media/demo-dark.12bdc379.png' />
          </div>
          <div className='flex flex-col'>
            <div class="rounded-full border-2 flex p-3 -ml-3" style={{ background: `${clr}` }}></div>
            <div class="w-0.5 h-56 md:h-72" style={{ background: `${clr}` }}></div>
          </div>
        </div>


        <div className='flex mx-auto'>
          <div className='flex justify-between w-1/2 ml-8'>
            <div></div>
            <div className='flex flex-col -mt-28'>
              <div class="rounded-full border-2 flex p-3 -ml-3" style={{ background: `${clr}` }}></div>
              <div class="w-0.5 h-32 md:h-56" style={{ background: `${clr}` }}></div>
            </div>
          </div>
          <div className='w-1/2 -mt-48 md:-mt-72'>
            <img className="animate-wiggle" src={appdev} height="300px" />
          </div>
        </div>


        <div className='flex mx-auto'>
          <div className='w-1/2 -mt-32 md:-mt-48'>
            <img className="animate-wiggle" src={blockdev} />
          </div>
          <div className='flex flex-col'>
            <div class="rounded-full border-2 flex p-3 -ml-3 -mt-3" style={{ background: `${clr}` }}></div>
          </div>
        </div>
      </div>
      <SectionHeader name={'30+ Technologies Strong'} clr={clr} />
      <div className='grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 place-items-center gap-4'>
        <img className="h-20 w-20 border" src={js_img} />
        <img className="h-20 w-20 border" src={py_img} />
        <img className="h-20 w-20 border" src={solidity_img} />
        <img className="h-20 w-20 border" src={rust_img} />
        <img className="h-20 w-20 border" src={node_img} />
        <img className="h-20 w-20 border" src={nest_img} />
        <img className="h-20 w-20 border" src={type_img} />
        <img className="h-20 w-20 border" src={ex_img} />
        <img className="h-20 w-20 border" src={react_img} />
        <img className="h-20 w-20 border" src={next_img} />
        <img className="h-20 w-20 border" src={html_img} />
        <img className="h-20 w-20 border" src={tailwind_img} />
      </div>

    </section >
  )
}

export default Technology