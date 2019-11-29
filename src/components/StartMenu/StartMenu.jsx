import React, { Component } from 'react';
import './StartMenu.css';
import { RESUME_TEXT, RESUME_ICON, EXPERIENCE_ICON, EXPERIENCE_TEXT, SKILLS_ICON, SKILLS_TEXT, PROJECTS_ICON, PROJECTS_TEXT, REFERENCES_ICON, REFERENCES_TEXT } from '../../App'
import References from '../References/References';
import resume from '../../assets/Bruno-Salgado-Resume.pdf'

export const CONTACT_TEXT = 'Contact Info'
export const CONTACT_ICON = 'address_book_card_users.png'
export const SHUTDOWN_TEXT = 'Shut Down'
export const SHUTDOWN_ICON = 'shut_down_normal-2.png'

class StartMenu extends Component {
    constructor(props) {
        super(props);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    open(app, icon) {
        this.props.openStartMenuApp(app, icon);
    }

    close() {
        this.props.close();
    }

    render() { 
        return (
            <div id='start-menu'>
                <div id='start-menu-label'>
                    <h1 id='label'>brunosalgado.com</h1>
                </div>
                <div id='start-menu-apps'>
                    <MyExperienceApp open={this.open} close={this.close}></MyExperienceApp>
                    <MySkillsApp open={this.open} close={this.close}></MySkillsApp>
                    <MyProjectsApp open={this.open} close={this.close}></MyProjectsApp>
                    <ReferencesApp open={this.open} close={this.close}></ReferencesApp>
                    <div className='divider'></div>
                    <ContactInfoApp open={this.open} close={this.close}></ContactInfoApp>
                    <MyResumeApp open={this.open} close={this.close}></MyResumeApp>
                    <div className='divider'></div>
                    <ShutDown open={this.open} close={this.close}></ShutDown>
                </div>
            </div>
        );
    }
}
 
export default StartMenu;

class MyResumeApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: RESUME_ICON
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.open(RESUME_TEXT, RESUME_ICON);
        this.props.close();
    }

    render() {
        return(
            <a href={resume} target='_blank' className='StartMenuApp' style={{textDecoration: 'none', color: 'inherit'}}>
                <img src={require(`../../img/icons/${this.state.icon}`)} className='StartMenuAppIcon' alt='resume icon'></img>
                <p className='StartMenuAppText'>{RESUME_TEXT}</p>
            </a>
        )
    }
}

class MyExperienceApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: EXPERIENCE_ICON
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.open(EXPERIENCE_TEXT, EXPERIENCE_ICON)
        this.props.close();
    }

    render() {
        return(
            <div onClick={this.handleClick} className='StartMenuApp'>
                <img src={require(`../../img/icons/${this.state.icon}`)} className='StartMenuAppIcon' alt='xp icon'></img>
                <p className='StartMenuAppText'>{EXPERIENCE_TEXT}</p>
            </div>
        )
    }
}

class MySkillsApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: SKILLS_ICON
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.open(SKILLS_TEXT, SKILLS_ICON)
        this.props.close();
    }

    render() {
        return(
            <div onClick={this.handleClick} className='StartMenuApp'>
                <img src={require(`../../img/icons/${this.state.icon}`)} className='StartMenuAppIcon' alt='skills icon'></img>
                <p className='StartMenuAppText'>{SKILLS_TEXT}</p>
            </div>
        )
    }
}

class MyProjectsApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: PROJECTS_ICON
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.open(PROJECTS_TEXT, PROJECTS_ICON)
        this.props.close();
    }

    render() {
        return(
            <div onClick={this.handleClick} className='StartMenuApp'>
                <img src={require(`../../img/icons/${this.state.icon}`)} className='StartMenuAppIcon' alt='projects icon'></img>
                <p className='StartMenuAppText'>{PROJECTS_TEXT}</p>
            </div>
        )
    }
}

class ReferencesApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: REFERENCES_ICON
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.open(REFERENCES_TEXT, REFERENCES_ICON)
        this.props.close();
    }

    render() {
        return(
            <div onClick={this.handleClick} className='StartMenuApp'>
                <img src={require(`../../img/icons/${this.state.icon}`)} className='StartMenuAppIcon' alt='references icon'></img>
                <p className='StartMenuAppText'>{REFERENCES_TEXT}</p>
            </div>
        )
    }
}

class ContactInfoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: CONTACT_ICON
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.open(CONTACT_TEXT, CONTACT_ICON)
        this.props.close();
    }

    render() {
        return(
            <div onClick={this.handleClick} className='StartMenuApp'>
                <img src={require(`../../img/icons/${this.state.icon}`)} className='StartMenuAppIcon' alt='contact icon'></img>
                <p className='StartMenuAppText'>{CONTACT_TEXT}</p>
            </div>
        )
    }
}

class ShutDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: SHUTDOWN_ICON
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.open(SHUTDOWN_TEXT, SHUTDOWN_ICON)
        this.props.close();
    }

    render() {
        return(
            <div onClick={this.handleClick} className='StartMenuApp'>
                <img src={require(`../../img/icons/${this.state.icon}`)} className='StartMenuAppIcon' alt='shutdown icon'></img>
                <p className='StartMenuAppText'>{SHUTDOWN_TEXT}</p>
            </div>
        )
    }
}