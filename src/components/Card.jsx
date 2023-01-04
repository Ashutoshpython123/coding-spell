import React from 'react'

const Card = ({ imgOne, clr, _clr }) => {
    return (
        <>
            <div className='rounded-lg min-w-[300px]'>
                <img
                    className="h-[90px] pt-2 mx-auto rounded-full"
                    style={{
                        boxShadow: "7px 7px 10px #cbced1, -7px -7px 10px white"
                    }}
                    src={imgOne} alt="blockchain"
                />

                <div className="p-2">
                    <div className="p-2 text-center">
                        <p
                            className='text-bold text-[20px]'
                            style={{
                                color: clr
                            }}
                        >
                            Blockchain Product Developement
                        </p><br />
                        <p
                        className='h-[100px] w-[280px] text-center'
                            style={{
                                boxShadow: "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3);"
                            }}
                        >
                            Say Hello to the new web presence of your business We are working to initiate your business We work every day
                            , people love us
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card