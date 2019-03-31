import React, { Component } from 'react';
import './StartButton.css'

const textStyle = {
    textDecoration: 'none',
    fontFamily: 'MS-Sans-Serif',
    color: 'black',
}

const buttonContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '40%',
    padding: '5px',
    margin: '3px',
    // boxShadow: '2px 2px',
    borderLeft: '2px solid white',
    borderTop: '2px solid white',
    borderRight: '2px solid black',
    borderBottom: '2px solid black'
}

const iconStyle = {
    width: '25px',
    height: '25px',
    margin: '5px',
}

class StartButton extends Component {
    state = {  }
    render() { 
        return (
            <div className="start-button" style={buttonContainerStyle}>
                <img src={require(`../img/menu/${this.props.icon}`)} alt="" style={iconStyle}></img>
                <p style={textStyle} href={this.props.href}>{this.props.text}</p>
            </div>
        );
    }
}
 
export default StartButton;