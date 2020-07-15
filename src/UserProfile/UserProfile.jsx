import React, { Component } from 'react'
import TabComponent from '../Tabs/TabComponent.jsx'
import './UserProfile.css'
import Tabcontent from '../Tabs/Tabcontent'
import Header from '../Header/Header'
export default class UserProfile extends Component {
    constructor(){
        super();
        this.state={
            tab1Content:"block",
            tab2Content:""
        }
    }
    ActiveTab=(p)=>{
        console.log("clicked tab"+p);
        if(p==="tab1"){
            this.setState({
                tab1Content:"block",
                tab2Content:"none"
            })
        }
        else if(p==="tab2"){

            this.setState({
                tab1Content:"none",
                tab2Content:"block"
            })
        }
        
          }
    render() {
        return (
            <div className="main-div">
                <Header>
                
                </Header>
                <TabComponent ActiveTab={this.ActiveTab}/>
             
              <Tabcontent tab1Content={this.state.tab1Content} tab2Content={this.state.tab2Content} />
            </div>
        )
    }
}
