import React, { CSSProperties } from 'react';
import '../App.css';
import Lottie from "lottie-react";
import myAnimation from './lotties/wind-animation.json';


function Header() {
    return (
       <header>
           <Lottie style={myImage} animationData={myAnimation}/>
       </header>
    )
}

const myImage: CSSProperties = {
    width: '13rem'
}

export default Header;