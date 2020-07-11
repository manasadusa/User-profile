import React from 'react'
import './Write.scss'
export default function Write() {
    return (
        <div className="write">
            <div className="text"> we are happy to<br/> hear from you</div>  <div className="form">
            <div className="input">
            <label>Name</label>
            <input type="text" placeholder="your name"/>
            </div>
            <div className="input">
            <label>email</label>
            <input type="text" placeholder="your email"/>
            </div>
            <div className="input desc">
            <label>Description</label>
            <textarea rows="10" cols="50"></textarea>
            </div>
            <div className="input">
            <button>Submit</button>
            </div>
            </div>
        </div>
    )
}
