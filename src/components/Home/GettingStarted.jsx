import React from 'react'

const GettingStarted = () => {
    return (
        <div className='mt-8 mx-24'>
            <div className='container flex flex-col md:flex-row mx-auto px-6 bg-gradient-to-r from-[#00AB55] to-[#007B55] rounded-large'>
                <div className='md:w-1/2'>
                    <img src='https://minimal-assets-api.vercel.app/assets/images/home/rocket.png' />
                </div>
                <div className='md:w-1/2 my-auto'>
                    <p className='text-white font-bold text-3xl md:text-5xl font-Rajdhani'>
                        Get started with a great project today
                    </p>
                    <button className='mt-4 p-3 px-6 rounded-md bg-white font-Rajdhani font-bold'>
                        Get Started
                    </button>

                </div>
            </div>
        </div>
    )
}

export default GettingStarted