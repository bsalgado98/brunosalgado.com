import React, { Component } from 'react';

const appStyle = {
    width: 'auto',
    // backgroundColor: 'blue', //DEBUG ONLY
    margin: '10px',
}

const iconStyle = {
    width: '3rem',
    // border: '4px solid black' //DEBUG ONLY
}

const textStyle = {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    fontFamily: 'MS Sans Serif',
}

class DesktopApp extends Component {
    constructor(props) {
        super(props);
        this.open = this.open.bind(this);
        this.exit = this.exit.bind(this);
    }

    open() {
        switch(this.props.text) {
            case "My Resume.pdf":
                window.open('Bruno-Salgado-Resume.pdf');
            break;
            default:
                this.props.openApp(this.props.text, this.props.icon)
        }
    }

    exit() {
        this.props.exitApp()
    }

    render() { 
        return (
            <div style={appStyle}>
                <img src={require(`../img/icons/${this.props.icon}`)} alt="" style={iconStyle} onClick={this.open}></img>
                <p style={textStyle} href={this.props.href}>{this.props.text}</p>
            </div>
        );
    }
}
 
export default DesktopApp;