import React, { Component } from 'react';

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
    borderLeft: '2px solid black',
    borderTop: '2px solid black',
    borderRight: '2px solid white',
    borderBottom: '2px solid white',
    backgroundColor: '#cacaca'
}

const iconStyle = {
    width: '25px',
    height: '25px',
    margin: '5px',
}


class Task extends Component {
    state = {  }
    render() { 
        return (
            <div className="task" style={buttonContainerStyle}>
                <img src={require(`../img/icons/${this.props.icon}`)} alt="" style={iconStyle}></img>
                <p style={textStyle} href={this.props.href}>{this.props.text}</p>
            </div>
        );
    }
}
 
export default Task;