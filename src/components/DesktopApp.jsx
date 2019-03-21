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
    state = {  }

    openApp = (appName) => {
        document.getElementById(appName).style.display = 'none';
    }

    render() { 
        return (
            <div style={appStyle} onClick={this.openApp('resume')}>
                <img src={require(`../img/icons/${this.props.icon}`)} alt="" style={iconStyle}></img>
                <p style={textStyle} href={this.props.href}>{this.props.text}</p>
            </div>
        );
    }
}
 
export default DesktopApp;