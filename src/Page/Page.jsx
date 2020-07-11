import React from 'react'
import Header from '../Header/Header'
import About from '../About/About'
import Cities from '../Cities/Cities'
import Write from '../Write/Write'
import Footer from '../Footer/Footer'
import './Page.scss'
export default function Page() {
    return (
        <div className="page">
            
            <Header/>
            
            <About/>
            <Cities/>
            <Write/>
            <Footer/>
            
            
        </div>
    )
}
