import React, {useState} from 'react'

const Button = ({ name, clr }) => {
    const [isHover, setIsHover] = useState(0);
    const handleMouseEnter = (x) => {
        setIsHover(x);
    };
    const handleMouseLeave = () => {
        setIsHover(0);
    };
    console.log(clr, 'buntn ')
    return (
        <>
            <button
                className={`font-Rajdhani w-36 bg-[${clr}] px-4 py-3 rounded-md text-white font-bold
             hover:bg-white hover:py-2 hover:border-2`}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
                style={{
                    color : isHover===1 ? `${clr}` : "", border : isHover===1 ? `1px solid ${clr}` : "",
                    boxShadow: "7px 7px 15px rgba(55, 84, 170, .15),-7px -7px 20px rgba(255, 255, 255, 1),inset 0px 0px 4px rgba(255, 255, 255, .2),inset 7px 7px 15px rgba(55, 84, 170, 0),inset -7px -7px 20px rgba(255, 255, 255, 0),0px 0px 4px rgba(255, 255, 255, 0)"
                }}
            >
                {name}
            </button>
        </>
    )
}

export default Button