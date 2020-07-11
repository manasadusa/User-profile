import React from 'react'
import hyd from '../img/hyd.jpg'
import mum from '../img/mumbai.jpg'
import chn from '../img/chennai.jpg'
import './Cities.scss'
import City from './City'
export default function Cities() {
    return (
        
           <div className="cities">
               <City visit="visit us : at Bandra ,Street 22" follow="follow us: mum@twitter.com" contact="contact us:mumretro@gmail.com " img={mum}/>
               <City visit="visit us : At Banjarahills Road no.5" follow="follow us:hyd@twitter.com" contact="contact us:  hydretro@gmail.com " img={hyd}/>
               <City visit="visit us : at Tamabarana, last avenue" follow="follow us:chn@twitter.com" contact="contact us: chnretro@gmail.com " img={chn}/>
            </div> 
        
    )
}
