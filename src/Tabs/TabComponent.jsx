import React from 'react'

import './Tabs.css'
 
export default function TabComponent(props) {
  
    return (
      <div className="TabComponent">
        <div className="Tabs">
        <div className="tab" onClick={()=>props.ActiveTab("tab1")}> Education</div>   
     <div className="tab" onClick={()=>props.ActiveTab("tab2")}>Projects</div>
        </div>
   
  </div>
    )
}

