import React, { Component } from 'react';
import StartButton from './StartButton';
import Task from './Task';

const barStyle = {
	// position: 'absolute',
	// zIndex: '2',
	// bottom: '0',
	// left: '0',
	// right: '0',
	// height: '27px',
	// display: 'flex',
    // flex: '1',
    // outline: '1px solid #c0c0c0',
	// borderTop: '1px solid white',
    // background: '#c0c0c0',
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

class Taskbar extends Component {
    state = {  }
    render() { 
        return (
            <div style={barStyle}>
                <StartButton text="Start" href="" icon='windows-logo.png'></StartButton>
                <Task text="My Experience" href="" icon='script_file_blue-0.png'></Task>
            </div>
        );
    }
}

export default Taskbar;