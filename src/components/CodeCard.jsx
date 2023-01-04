import React from 'react'
import Typing from "./Typing"

const CodeCard = ({clr}) => {

    return (
        <>
            <div
                className="bg-[#365314] text-white w-[450px] p-2 font-Rajdhani rounded"
            >
                <Typing clr={clr} />
            </div>
            <div className="bg-black text-white w-[450px] ml-32 p-2 my-5 font-Rajdhani rounded">
                <Typing clr={clr} />
            </div>
            <div className="bg-[#14532d] text-white w-[450px] p-2 font-Rajdhani rounded">
                <Typing clr={clr} />
            </div>
        </>
    )
}

export default CodeCard