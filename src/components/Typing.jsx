import React from 'react'
import TypeWriterEffect from "react-typewriter-effect";

const Typing = ({clr}) => {
    console.log(clr, "+++++")
    return (
        <>
            <div>
                <div style={{ display: "flex" }}>
                    <Writer paddingLeft={0} delay={0} text="for" color={clr} />
                    <Writer
                        paddingLeft={10}
                        delay={2000}
                        text="platform in soc_set"
                        color=""
                    />
                    <Writer paddingLeft={0} delay={2000} text=":" color={clr} />
                </div>
                <div style={{ display: "flex", marginLeft: 20 }}>
                    <Writer paddingLeft={0} delay={3000} text="if(" color={clr} />
                    <Writer paddingLeft={0} delay={3100} text="platform" color="" />
                    <Writer paddingLeft={10} delay={4000} text="==" color={clr} />
                    <Writer
                        paddingLeft={10}
                        delay={4300}
                        text="'Twitter'"
                        color=""
                    />
                    <Writer paddingLeft={0} delay={4600} text="):" color={clr} />
                </div>
                <div style={{ display: "flex", marginLeft: 40 }}>
                    <Writer paddingLeft={0} delay={6000} text="print(" color={clr} />
                    <Writer
                        paddingLeft={0}
                        delay={7000}
                        text="platform, 'is about to be bought by Elon Musk.'"
                        color=""
                    />
                    <Writer paddingLeft={0} delay={7500} text=")" color={clr} />
                </div>
                <br />
                <div style={{ display: "flex" }}>
                    <Writer paddingLeft={0} delay={12000} text=">>>" color={clr} />
                    <Writer
                        paddingLeft={10}
                        delay={14000}
                        text="Twitter is about to be bought by Elon Musk."
                        color=""
                    />
                </div>
            </div>
        </>
    )
}

export default Typing

const Writer = ({ paddingLeft, delay, text, color }) => {
    return (
        <TypeWriterEffect
            textStyle={{
                fontFamily: "Courier",
                fontSize: 12,
                paddingLeft: paddingLeft,
                color: color
            }}
            startDelay={delay}
            cursorColor={color}
            hideCursorAfterText
            text={text}
            typeSpeed={100}
        />
    );
};
