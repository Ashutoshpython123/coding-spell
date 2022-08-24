import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
  return (
    <section className='mt-8 pb-96 md:pb-0 ' style={{ backgroundImage: `url(https://berrydashboard.io/static/media/img-lay-grid.d849dec9.png)` }}>
      <hr className='bg-[#007B55] w-full h-0.5' />
      <div className='px-12 pb-16 pt-16 font-Rajdhani font-bold space-x-4 flex flex-col md:flex-row'>
        <div className='md:w-1/3'>
          <p className='text-4xl'>Coding Spell</p>
        <hr className='bg-[#007B55] w-full h-0.5 mt-4 mb-2' />

          <p className=''>Seedify is a Blockchain Gaming focused Incubator and Launchpad. By staking $SFUND,
            you become eligible to buy game tokens before everyone else, giving you the edge in the play-to-earn era
          </p>
        </div>

        <div className='md:w-1/4'>
          <p className='font-bold mx-auto text-2xl'>Services</p>
        <hr className='bg-[#007B55] w-full h-0.5 mt-6 mb-2' />

          <div className=''>
            <p>Website Development</p>
            <p>App Development</p>
            <p>Blockchain Development</p>
            <p>Ai & Machine Learning</p>

          </div>
        </div>

        <div className='md:w-1/3'>
          <p className='font-bold mx-auto text-2xl'>Contact Us</p>
        {/* <hr className='bg-[#007B55] w-full h-0.5 mt-6 mb-2' />           */}
          <div className='mt-6 mb-2'>
            <TelegramIcon />
          </div>

        </div>
      </div>


    </section>
  )
}

export default Footer