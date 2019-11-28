import React, { Component } from 'react';
import './StartButton.css'

const textStyle = {
    textDecoration: 'none',
    fontFamily: 'MS-Sans-Serif',
    color: 'black',
}

const iconStyle = {
    width: '25px',
    height: '25px',
    margin: '5px',
}

class StartButton extends Component {
    constructor(props) {
        super(props);
        this.open = this.open.bind(this)
    }

    open() {
        this.props.open();
    }

    render() { 
        return (
            <div className={ this.props.activated ? "StartButtonActivated" : "StartButton" } onClick={this.open}>
                <img src={require(`../img/menu/${this.props.icon}`)} alt="" style={iconStyle}></img>
                <p style={textStyle} href={this.props.href}>{this.props.text}</p>
            </div>
        );
    }
}
 
export default StartButton;