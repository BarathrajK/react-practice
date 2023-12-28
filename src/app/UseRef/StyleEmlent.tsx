import React, { useEffect, useRef } from 'react'


const StyleEmlent = () => {

    const colorParagraph = useRef(null);
    const color = ["#e94944", "#48a93a", "#c6bee7", "#0ec47a", "#c11ee1", "#d65f07", "#ab1367", "#9613fa", "#16bb9d", "#023a10"];

    useEffect(() => {
        console.log(colorParagraph);
        console.log(colorParagraph.current);
    });

    // const stylePara = () => {
    //     const radomColor = Math.floor(Math.random() * color.length);
    //     colorParagraph.current.style.color = color[radomColor];

    // }

    return (
        <div>
            {/* <button onClick={() => { stylePara() }}>Click me</button> */}
            <div>
                <b ref={colorParagraph}>Welcome to React hooks concept in useRef</b>
            </div>
        </div>
    )
}

export default StyleEmlent;
