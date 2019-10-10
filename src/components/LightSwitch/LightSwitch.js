import React, { Component } from 'react';
import './LightSwitch.css'
import  switchOn from '../images/switch-on.png'
import switchOff from '../images/switch-off.png'
import light from '../images/lightbulb.jpg'


class Switch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            switchStatus: true, // means on
            switchImage: switchOn, // default switch is on
            lightImage: light // light is on
        }
    }
    
    
    handleSwitch = () => {
        // remember to deconstruct to make your life easier
        let { switchStatus, switchImage, lightImage } = this.state

        
        if (switchStatus) { // if switch status is true
           this.setState({switchStatus: false})  // make the switchStatus state to false
           this.setState({switchImage: switchOff})
           this.setState({lightImage: ''})

           
        } else { // if switch status is false
            this.setState({switchStatus: true}) // make the switchStatus state to true
            this.setState({switchImage: switchOn})
            this.setState({lightImage: light})


        }
        
    }
    
    render() {
        let { switchStatus, switchImage, lightImage} = this.state
        

        
        return (
            <div>
                <div className="light-box">
                    <img src={lightImage}/>
                </div>
                <button onClick={this.handleSwitch} className="switch-box">
                    <img src={switchImage}/>
                </button>
            </div>
        );
    }
}


export default Switch;