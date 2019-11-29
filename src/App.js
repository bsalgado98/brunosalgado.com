import React, { Component } from 'react';
import './App.css';
import Taskbar from './components/Taskbar.jsx';
import DesktopApp from './components/DesktopApp/DesktopApp';
import AppFrame from './components/AppFrame/AppFrame';
import StartMenu from './components/StartMenu';
// import { BrowserRouter as Router, Route } from 'react-router-dom'

export const RESUME_TEXT = "My Resume.pdf"
export const RESUME_ICON = "script_file_blue-1.png"
export const EXPERIENCE_TEXT = "My Experience.txt"
export const EXPERIENCE_ICON = "briefcase-4.png"
export const PROJECTS_TEXT = "My Projects"
export const PROJECTS_ICON = "directory_closed-4.png"
export const SKILLS_TEXT = "My Skills"
export const SKILLS_ICON = "computer-4.png"
export const REFERENCES_TEXT = "References"
export const REFERENCES_ICON = "address_book_users.png"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appFrameVisible: false,
      currentApp: {
        app: null,
        icon: null,
      },
      startMenuVisible: false,
      shutDown: false
    }
    this.open = this.open.bind(this)
    this.exit = this.exit.bind(this)
    this.openStartMenu = this.openStartMenu.bind(this);
    this.closeStartMenu = this.closeStartMenu.bind(this);
    this.clickDesktop = this.clickDesktop.bind(this);
  }

  open(app, icon) {
    if(app === 'Shut Down') {
      this.setState({shutDown: true})
      return;
    }
    this.setState({
      currentApp: {
        app: app,
        icon: icon
      },
      appFrameVisible: true,
    })
  }

  exit() {
    this.setState({
      currentApp: {
        app: null,
        icon: null
      },
      appFrameVisible: false,
    })
  }

  onDragOver = (event) => {
    event.preventDefault();
  }

  onDrop = (event, cat) => {
    event.preventDefault();
  }

  openStartMenu() {
    this.setState({
      startMenuVisible: true
    })
  }

  closeStartMenu() {
    this.setState({
      startMenuVisible: false
    })
  }

  clickDesktop() {
    this.closeStartMenu();
  }

  render() {
    return (
      <div className='App'>
        <div className={this.state.shutDown ? 'ShutDownActive' : 'ShutDownInactive'}><div><img id='you-died'src={require(`./img/icons/youdied.png`)}></img></div></div>
        <div id="app-space">
          {
            this.state.appFrameVisible
              ? <AppFrame app={this.state.currentApp.app} icon={this.state.currentApp.icon} exitApp={this.exit}/>
              : null
          }
        </div>
        <div id='desktop' onClick={this.clickDesktop}>
          <DesktopApp icon={EXPERIENCE_ICON} text={EXPERIENCE_TEXT} openApp={this.open}></DesktopApp>
          <DesktopApp icon={SKILLS_ICON} text={SKILLS_TEXT} openApp={this.open}></DesktopApp>
          <DesktopApp icon={PROJECTS_ICON} text={PROJECTS_TEXT} openApp={this.open}></DesktopApp>
          <DesktopApp icon={REFERENCES_ICON} text={REFERENCES_TEXT} openApp={this.open}></DesktopApp>
          {
            this.state.startMenuVisible
              ? <StartMenu close={this.closeStartMenu} openStartMenuApp={this.open}></StartMenu>
              : null
          }
        </div>
        <Taskbar open={this.openStartMenu} currentTaskText={this.state.currentApp.app} currentTaskIcon={this.state.currentApp.icon} startButtonActivated={this.state.startMenuVisible} closeStartMenu={this.closeStartMenu}></Taskbar>
      </div>
    );
  }

}

export default App;
