import React from 'react'




const GettingStarted = ({ clr, _clr }) => {

    return (
        <div className='mt-8 mx-4 md:mx-24'>
            <div
                className={`container flex flex-col md:flex-row mx-auto px-6 rounded-large`}
                style={{
                    backgroundImage: `linear-gradient(to right, ${clr}, ${_clr})`,
                }}
            >
                <div className='md:w-1/2'>
                    <img src='https://minimal-assets-api.vercel.app/assets/images/home/rocket.png' />
                </div>
                <div className='md:w-1/2 my-auto'>
                    <p className='text-center sm:text-left text-white font-bold text-3xl md:text-5xl font-Rajdhani'>
                        Get started with a great project today
                    </p>
                    <div className="text-center mb-6 sm:text-left">
                        <button className='mt-4 p-3 px-6 rounded-md bg-white font-Rajdhani font-bold'>
                            Get Started
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GettingStarted