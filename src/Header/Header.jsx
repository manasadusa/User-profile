import React from 'react'
import './Header.scss'
import logo from '../img/Retro.png'
export default function Header() {
    return (
        
           
                <div className="header">
                   
                   <img src={logo} alt="logo"/>
                    
                    <ul className="menu">
                        <li >Home</li>
                        <li>About</li>
                        <li>Cities</li>
                        <li> sign up</li>
                        <li>contact us</li>
                    </ul>
                </div>
            
            
        
    )
}
