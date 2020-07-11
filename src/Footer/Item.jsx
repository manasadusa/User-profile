import React from 'react';
const Item=(props)=>{
return(
    <div className="item">
                    <h5>{props.title}</h5>
                <br/>
               <p>{props.one}</p>
                <br/>
                <p>{props.two}</p>
                </div>
)
}
export default Item;