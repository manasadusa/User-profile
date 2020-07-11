import React from 'react'
import './Footer.scss'
import Item from './Item'
import logo from '../img/Retro.png'
export default function Footer() {
    return (
        
                <div className="footer">
                    <div className="brand">
                    <img src={logo} alt="logo"/>  
            <p>  RetroFit</p>
                    </div>
                 
            <div className="items">
                <Item one="Blog" two="team" title="Product"/>
                <Item one="How it works" two="Trust" title="Support"/>
                <Item one="Premium Membership" two="Be part" title="Resources"/>
                <Item one="At locals" two="Handcrafted" title="Discover"/>
               

            </div>
            </div>
        
    )
}
