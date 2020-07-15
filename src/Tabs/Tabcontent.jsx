import React from 'react'
import './Tabs.css'
const Tabcontent=(props)=>{
   
    return(
        
        <div className="Content">
                <div className="tab-content"style={{display:props.tab1Content}} >
                   <p>  I Am a CS graduate, who started   Professional career with java.
                     <br/>But How ever i tried to force myself work in java, things didn't interest me.<br/>

                     Lately  i found  UI very interesting.
                     <br/>
                     <br/>
                     I picked up different pieces which i knew already and started building things.
<br/>
                     But i had to choose one language, to be proficient.
                    <br/> So Here i chose React.
                     <br/>
                     One thing i learnt in this journey is there is much more to learn .
                      <br/>
                      <br/>
                      And Always its a begining !!!
                      </p>  
                </div>
                <div className="tab-content" style={{display:props.tab2Content}}>
              <p>  I have been doing different Projects ,<br/> since I took up My 100daysofcode challenge.<br/>
                Wish i fill this Place with  more exciting things.<br/>
                You can now checkout my projects with Below Links:
               <h6>card-checkout:</h6> 
              <a href= "https://github.com/manasadusa/card-checkout"  >Click here for check out code</a>
                <br/>
               <h6>Landing Page for Retro showroom:</h6> 
               <a href= "https://github.com/manasadusa/Landing-page"  >Click here for Landing Page code</a>
               <h6>Calculator:</h6> 
               <a href= "https://github.com/manasadusa/Calculator"  >Click here for Calculator code</a>
               <br/>
                </p>

                    </div>
        </div>
    )
}
export default Tabcontent;