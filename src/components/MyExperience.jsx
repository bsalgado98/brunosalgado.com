import React, { Component } from 'react';
import './MyExperience.css'

class MyExperience extends Component {
    state = {
        currentExperience: 'JnJ'
    }
    render() { 
        return (
            <div id="experience">
                <div id="left-panel">
                    {(
                        () => {
                            switch(this.state.currentExperience) {
                                case "JnJ":
                                    return <JnJ></JnJ>;
                                case "SERC":
                                    return <SERC></SERC>;
                                case "Crestron":
                                    return <Crestron></Crestron>;
                                default:
                                    return null;
                            }
                        }
                    )()}
                </div>
                <div id="right-panel">
                        <div className='experienceButton' onClick={()=>{this.setState({currentExperience: 'JnJ'})}}>J&amp;J</div>
                        <div className='experienceButton' onClick={()=>{this.setState({currentExperience: 'SERC'})}}>SERC</div>
                        <div className='experienceButton' onClick={()=>{this.setState({currentExperience: 'Crestron'})}}>Crestron</div>
                </div>
            </div>
        );
    }
}
 
export default MyExperience;

class JnJ extends Component {
    render() {
        return (
            <div>
                <h1>Johnson & Johnson</h1>
                <h4>IT Co-op</h4>
                <p>
                    The team I joined at Johnson &amp; Johnson was a newly formed team that only had 1 other employee besides my manager. On the Supply Chain, Digital Channels team I was able to spearhead proof of concept projects that served to provide software development services to different product lines in the supply chain organization.<br/><br/>Being on the team led me to some exciting opportunities to work on interesting new solutions to supply chain problems. The main project that I led involved creating an iOS mobile application that handled real-time asset tracking within a hospital. The goal was to place beacons on high-value medical assets and be able to locate the precise location of the asset based on beacon geolocation data in conjunction with Apple's new indoor positioning features. As part of the team, I not only took charge of the development effort, but I also directed conversations with Apple Systems Engineers to gather information regarding the capabilities of Apple's CoreLocation software library.<br/><br/>This co-op allowed me to develop proficiency in Swift and also gave me insight into how software projects are started and managed. Being able to lead discussions with Apple also allowed me to see what it was like to negotiate requirements in a broader scope than just my immediate team.
                </p>
            </div>
        );
    }
}

class SERC extends Component {
    render() {
        return (
            <div>
                <h1>Systems Engineering Research Center</h1>
                <h4>Web Engineer</h4>
                <p>
                I was responsible for designing and developing a website to showcase the research efforts of the Helix team. Their work was a behavioral study on Systems Engineers and their role within an organization. I had weekly meetings with the team lead to discuss website requirements and gather feedback in regards to the style of the web page. My work can be seen <strong><a href="https://helix-se.org">here.</a></strong>
                </p>
            </div>
        );
    }
}

class Crestron extends Component {
    render() {
        return (
            <div>
                <h1>Crestron Electronics</h1>
                <h4>Systems Test Engineer</h4>
                <p>
                As part of the UI Test Automation team, I developed automated tests using VBScript and the TestComplete IDE. I wrote code for brand new tests that covered some of the company's most important software, including Crestron Studio and Crestron Toolbox.
                </p>
            </div>
        );
    }
}