import React from 'react'


import grid_img from "../../assets/HomeImg/grid.png"



const Banner = () => {

  return (
    <section style={{ backgroundImage: `url(${grid_img})` }} id="banner">
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-20 space-y-0 md:space-y-0 font-Rajdhani md:flex-row">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h1 className='text-4xl text-center md:text-5xl font-extrabold md:text-left'>
              We help clients
              solve business problems by fusing
              <span className='green_text'> creativity, innovation, strategy,</span> and <span className='green_text'>craft.</span>
            </h1>
            <p className='font-extrabold'>
              Say Hello
              to the new web presence of your business
              We are working to initiate your business
              We work every day, people love us
            </p>

            <div className="hidden font-Rajdhani w-40 green_bg p-3 px-6 pt-2 pb-2 text-white rounded-full hover:text-textc hover:border-textc border-2 md:block">GettingStarted</div>

          </div>
          <div className='md:w-1/2 mb-60 -mt-12 md:mb-2'>
            <div>
              <img className='absolute w-[100%] md:w-[50%]' src="https://minimal-assets-api.vercel.app/assets/images/home/theme-color/screen-default.png" />
              <img className='absolute w-[100%] md:w-[50%] animate-wiggle' src="https://minimal-assets-api.vercel.app/assets/images/home/theme-color/block1-red.png" />
              <img className='absolute w-[100%] md:w-[50%] animate-wiggle' src="https://minimal-assets-api.vercel.app/assets/images/home/theme-color/sidebar-red.png" />
              <img className='absolute w-[100%] md:w-[50%] animate-wiggle' src="https://minimal-assets-api.vercel.app/assets/images/home/theme-color/block2-red.png" />

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Banner


{/* <div class="relative animation-wrapper">
              <div class="relative layered-animations">

                <div viewBox="0 0 96 96">
                  <img src={logo} height={65} width={65} />
                </div>
                <div>
                  <img src={mongo_img} height={65} width={65} />
                </div>
                <div>
                  <img src={node_img} height={65} width={65} />
                </div>

                <div>
                  <img src={type_img} height={65} width={65} />
                </div>
                <div>
                  <img src={express_img} height={65} width={65} />
                </div>
                <div>
                  <img src={nodejs_img} height={65} width={65} />
                </div>
                <div>
                  <img src={tailwind_img} points="48 17.28 86.4 80.11584 9.6 80.11584" height={65} width={65} />
                </div>
                <div>
                  <img src={solidity_img} height={65} width={65} />
                </div>
                <div>
                  <img src={web_img} height={65} width={65} />
                </div>


              </div>
            </div>  */}