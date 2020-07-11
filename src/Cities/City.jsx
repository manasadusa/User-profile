import React from 'react';
const City =(props)=>{
    return(
        <div className="city">
        <img src={props.img} alt="img"/>
        <div className="city-desc">
            <div className="icon"><ion-icon name="pin-outline"></ion-icon></div>
          <h6>{props.visit}</h6></div>
        
           <div className="city-desc">
           <div className="icon"><ion-icon name="logo-twitter"></ion-icon></div> 
           <h6> {props.follow}</h6></div> 
            
            <div className="city-desc">
            <div className="icon"><ion-icon name="logo-google"></ion-icon></div>
            <h6>  {props.contact} </h6>
            </div>
            
        
    </div>
    )
}

export default City;