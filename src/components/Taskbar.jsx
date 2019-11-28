import React, { Component } from 'react';
import StartButton from './StartButton';
import Task from './Task';

const barStyle = {
    position: 'absolute',
    backgroundColor: '#c0c0c0',
    bottom: '0',
    width: '100%',
    height: '10%',
    minHeight: '30px',
    maxHeight: '40px',
    display: 'flex',
    flexDirection: 'flex-start',
};

const dividerStyle = {
    borderLeft: '2px solid white',
    borderRight: '2px solid black',
    marginTop: '0.2rem',
    marginBottom: '0.2rem',
}

class Taskbar extends Component {
    constructor(props) {
        super(props);
        this.open = this.open.bind(this);
        this.closeStartMenu = this.closeStartMenu.bind(this);
    }

    open() {
        this.props.open();
    }

    closeStartMenu() {
        this.props.closeStartMenu();
    }

    render() { 
        return (
            <div style={barStyle}>
                <StartButton text="Start" href="" icon='windows-logo.png' open={this.open} activated={this.props.startButtonActivated}></StartButton>
                <div onClick={this.closeStartMenu} style={{width: '100%', display: 'flex'}}>
                    <div style={dividerStyle}></div>
                    {
                        this.props.currentTaskText
                            ? <Task text={this.props.currentTaskText} href="" icon={this.props.currentTaskIcon}></Task>
                            : null
                    }
                </div>
            </div>
        );
    }
}

export default Taskbar;