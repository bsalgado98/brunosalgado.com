import React, { Component } from 'react';
import './ContactInfo.css';

const EMAIL_ICON = 'envelope_closed-0.png'
const GITHUB_ICON = 'github-icon.png'
const LINKEDIN_ICON = 'linkedin-icon.png'

class ContactInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailIcon: EMAIL_ICON,
            githubIcon: GITHUB_ICON,
            linkedinIcon: LINKEDIN_ICON
        }
    }
    render() { 
        return (
            <div id="contact">
                <a className='ContactMedium' href='mailto:bsalgado@stevens.edu'><img src={require(`../img/icons/${this.state.emailIcon}`)} alt='email icon'></img></a>
                <a className='ContactMedium' href='https://www.github.com/bsalgado98'><img src={require(`../img/icons/${this.state.githubIcon}`)} alt='github icon'></img></a>
                <a className='ContactMedium' href='https://www.linkedin.com/in/brunosalgado98'><img src={require(`../img/icons/${this.state.linkedinIcon}`)} alt='linkedin icon'></img></a>
            </div>
        );
    }
}
 
export default ContactInfo;