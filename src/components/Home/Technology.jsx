import React from 'react'
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









const Technology = () => {
  return (
    <section className='m-12'>
      <p className="md:text-4xl text-[#007B55] my-6 text-center mx-auto underline font-Rajdhani font-bold">TECHNOLOGY</p>
      <div>
        <div className='flex mx-auto'>
          <div className='w-1/2' style={{ backgroundImage: `url(https://berrydashboard.io/static/media/img-lay-grid.d849dec9.png)` }}>
            <img className="animate-wiggle" src='https://berrydashboard.io/static/media/demo-dark.12bdc379.png' />
          </div>
          <div className='flex flex-col'>
            <div class="rounded-full border-2 flex p-3 -ml-3 bg-[#007B55]"></div>
            <div class="w-0.5 h-72 bg-[#007B55]"></div>
          </div>
        </div>


        <div className='flex mx-auto'>
          <div className='flex justify-between w-1/2 ml-7'>
            <div></div>
            <div className='flex flex-col -mt-28'>
              <div class="rounded-full border-2 flex p-3 -ml-3 bg-[#007B55]"></div>
              <div class="w-0.5 h-56 bg-[#007B55]"></div>
            </div>
          </div>
          <div className='w-1/2 -mt-64' style={{ backgroundImage: `url(https://berrydashboard.io/static/media/img-lay-grid.d849dec9.png)` }}>
            <img className="animate-wiggle" src='https://berrydashboard.io/static/media/demo-rtl.49326f74.png' />
          </div>
        </div>


        <div className='flex mx-auto'>
          <div className='w-1/2 -mt-48' style={{ backgroundImage: `url(https://berrydashboard.io/static/media/img-lay-grid.d849dec9.png)` }}>
            <img className="animate-wiggle" src='https://berrydashboard.io/static/media/demo-multi.e1ef85e2.png' />
          </div>
          <div className='flex flex-col'>
            <div class="rounded-full border-2 flex p-3 -ml-3 -mt-3 bg-[#007B55]"></div>
          </div>
        </div>
      </div>
      <p className="md:text-4xl text-[#007B55] my-6 text-center mx-auto underline font-Rajdhani font-bold">30+ Technologies Strong</p>
      <div className='flex mx-auto justify-center space-x-2'>
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
    </section>
  )
}

export default Technology