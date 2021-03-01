import React, { CSSProperties } from 'react';
import '../App.css';
import logo from './assets/logo.png';


function Footer() {
    return(
        <footer>
            <text>
                <img style={logoStyle} src={logo} alt="logo"></img>
                &nbsp; 
            <p> ©  2021</p>
            </text>
        </footer>
    )
}
const logoStyle: CSSProperties = {
    width: '3rem'
}
export default Footer;
