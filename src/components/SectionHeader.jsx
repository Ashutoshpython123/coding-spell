import React from 'react'

const SectionHeader = ({ name, clr }) => {
    return (
        <>
            <p className={`md:text-4xl my-6 text-center mx-auto font-Rajdhani font-black`}
                style={{ color: `${clr}` }}
            >
                {name}
            </p>
        </>
    )
}

export default SectionHeader