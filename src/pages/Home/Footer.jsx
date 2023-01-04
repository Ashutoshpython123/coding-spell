import React, {useState} from 'react'
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = ({ clr, _clr }) => {

  const [isHover, setIsHover] = useState(0);
  const handleMouseEnter = (x) => {
    setIsHover(x);
  };
  const handleMouseLeave = () => {
    setIsHover(0);
  };

  //flex flex-col md:flex-row md:justify-between
  return (
    <section className='mt-8 pb-6 md:pb-0 text-white rounded-t-3xl' style={{ background: `${_clr}` }}>
      <div className='mx-4 md:mx-12 pb-10 pt-16 font-Rajdhani font-bold space-x-4 grid grid-cols-1 sm:place-items-center gap-10 md:grid-cols-3'>
        <div className=''>
          <p className='text-4xl'>Coding Spell</p>
          <p className='pt-2'>Seedify is a Blockchain Gaming focused Incubator and Launchpad. By staking $SFUND,
            you become eligible to buy game tokens before everyone else, giving you the edge in the play-to-earn era
          </p>
        </div>

        <div>
          <p className='text-2xl'>Services</p>
          <div className='pt-3'>
            <p>Website Development</p>
            <p>App Development</p>
            <p>Blockchain Development</p>
            <p>Ai & Machine Learning</p>

          </div>
        </div>

        <div>
          <p className='font-bold text-2xl'>News and Post</p>
          <div className='pt-3'>
            <p>Website Development</p>
            <p>App Development</p>
            <p>Blockchain Development</p>
            <p>Ai & Machine Learning</p>
          </div>
          
        </div>
      </div>

      <div className='mx-auto text-center pb-2'>
        <div className="space-x-4">
          <TelegramIcon
            style={{ color: isHover == 1 ? "white" : `${clr}`, backgroundColor: isHover == 1 ? `${clr}` : '' }}
            className={`hover:text-white hover:rounded-md hover:cursor-pointer bg-white rounded`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          />
          <GitHubIcon
            style={{ color: isHover == 2 ? "white" : `${clr}`, backgroundColor: isHover == 2 ? `${clr}` : '' }}
            className={`hover:text-white hover:rounded-md hover:cursor-pointer bg-white rounded`}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          />
          <TwitterIcon
            style={{ color: isHover == 3 ? "white" : `${clr}`, backgroundColor: isHover == 3 ? `${clr}` : '' }}
            className={`hover:text-white hover:rounded-md hover:cursor-pointer bg-white rounded`}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </section>
  )
}

export default Footer