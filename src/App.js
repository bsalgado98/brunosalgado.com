import React, { Component } from 'react';
import './App.css';
import Taskbar from './components/Taskbar.jsx';
import DesktopApp from './components/DesktopApp';
import AppFrame from './components/AppFrame';
import MyResume from './components/MyResume';

class App extends Component {

  state = {
    currentApp: '',
  }

  onDragOver = (event) => {
    event.preventDefault();
  }

  onDrop = (event, cat) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="App" onDragOver={(event)=>this.onDragOver(event)} onDrop={(event)=>this.onDrop(event,"complete")}>
        <div id='desktop'>
          <DesktopApp icon='script_file_blue-1.png' text='My Resume.pdf'></DesktopApp>
          <AppFrame></AppFrame>

          <DesktopApp icon='briefcase-4.png' text='My Experience.txt'></DesktopApp>
          <DesktopApp icon='directory_closed-4.png' text='My Projects'></DesktopApp>
          <DesktopApp icon='directory_closed-4.png' text='My Skills'></DesktopApp>
          <DesktopApp icon='directory_closed-4.png' text='My Skills'></DesktopApp>
          <DesktopApp icon='directory_closed-4.png' text='My Skills'></DesktopApp>
          <DesktopApp icon='directory_closed-4.png' text='My Skills'></DesktopApp>
          <DesktopApp icon='directory_closed-4.png' text='My Skills'></DesktopApp>
          <DesktopApp icon='directory_closed-4.png' text='My Skills'></DesktopApp>
          <DesktopApp icon='directory_closed-4.png' text='My Skills'></DesktopApp>
          <DesktopApp icon='directory_closed-4.png' text='My Skills'></DesktopApp>
          <DesktopApp icon='directory_closed-4.png' text='My Skills'></DesktopApp>
        </div>
        <Taskbar></Taskbar>
      </div>
    );
  }
}

export default App;
