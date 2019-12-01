import React, { useState, useEffect, useContext } from 'react';
import './MyExperience.css'
import WebNavBar from './WebNavBar/WebNavBar';
import {CurrentExperienceIndexProvider} from './CurrentExperienceIndexContext'

const MyExperience = () => {
    const experiences = ['JnJ1', 'JnJ2', 'SERC', 'Crestron']
    let CurrentExperienceIndexContext = React.createContext(0)
    const [currentExperienceIndex, setCurrentExperienceIndex] = useState(useContext(CurrentExperienceIndexContext))
    // let currentExperience = experiences[currentExperienceIndex]
    const [currentExperience, setCurrentExperience] = useState(experiences[currentExperienceIndex])
    function setExperienceIndex(valueToAdd) {
        setCurrentExperienceIndex((prev) => {
            prev += valueToAdd
            if(prev < 0) {
                prev = experiences.length - 1
            }
            else if(prev >= experiences.length) {
                prev = 0
            }
            return prev
        })
    }
    const renderExperience = (name) => {
        const teamStyle = {color: 'gray'}
        switch(name) {
            case 'JnJ1':
                return (
                    <div className='ExperiencePage'>
                        <div className='ExperienceTitle'>
                            <h1>Johnson &amp; Johnson</h1>
                            <img src=''></img>
                        </div>
                        <h4>Software Engineer Co-op, September - December 2019</h4>
                        <h4 style={teamStyle}>Technology Services, Software Engineering and Emerging Technology (SwEET) Team</h4>
                        <p>NOT SURE YET LOL</p>
                    </div>
                )
            case 'JnJ2':
                return (
                    <div className='ExperiencePage'>
                        <h1>Johnson &amp; Johnson</h1>
                        <h4>IT Co-op, January - August 2019</h4>
                        <h4 style={teamStyle}>Supply Chain, Customer Connectivity, Digital Channels Team</h4>
                        <p>The team I joined at Johnson &amp; Johnson was a newly formed team that only had 1 other employee besides my manager. On the Supply Chain, Digital Channels team I was able to spearhead proof of concept projects that served to provide software development services to different product lines in the supply chain organization.<br/><br/>Being on the team led me to some exciting opportunities to work on interesting new solutions to supply chain problems. The main project that I led involved creating an iOS mobile application that handled real-time asset tracking within a hospital. The goal was to place beacons on high-value medical assets and be able to locate the precise location of the asset based on beacon geolocation data in conjunction with Apple's new indoor positioning features. As part of the team, I not only took charge of the development effort, but I also directed conversations with Apple Systems Engineers to gather information regarding the capabilities of Apple's CoreLocation software library.<br/><br/>This co-op allowed me to develop proficiency in Swift and also gave me insight into how software projects are started and managed. Being able to lead discussions with Apple also allowed me to see what it was like to negotiate requirements in a broader scope than just my immediate team.</p>
                    </div>
                )
            case 'SERC':
                return (
                    <div className='ExperiencePage'>
                        <div className='ExperienceTitle'>
                            <h1>Systems Engineering Research Center (SERC)</h1>
                            <img src=''></img>
                        </div>
                        <h4>Web Engineer, September - December 2018</h4>
                        <h4 style={teamStyle}>HELIX Research Team</h4>
                        <p>I was responsible for designing and developing a website to showcase the research efforts of the Helix team. Their work was a behavioral study on Systems Engineers and their role within an organization. I had weekly meetings with the team lead to discuss website requirements and gather feedback in regards to the style of the web page. My work can be seen <strong><a href="https://helix-se.org">here.</a></strong></p>
                    </div>
                )
            case 'Crestron':
                return (
                    <div className='ExperiencePage'>
                        <div className='ExperienceTitle'>
                            <h1>Crestron Electronics</h1>
                            <img src=''></img>
                        </div>
                        <h4>Systems Test Engineer Co-op, January - August 2018</h4>
                        <h4 style={teamStyle}>Software Tools, Crestron Toolbox, Verification Engineering Team</h4>
                        <p>As part of the UI Test Automation team, I developed automated tests using VBScript and the TestComplete IDE. I wrote code for brand new tests that covered some of the company's most important software, including Crestron Studio and Crestron Toolbox.</p>
                    </div>
                )
            default:
                console.log('EXPERIENCE NOT FOUND')
        }
    }
    useEffect(() => {
        console.log('hi')
        setCurrentExperience(experiences[currentExperienceIndex])
    }, [currentExperienceIndex])
    return (
        <CurrentExperienceIndexProvider value={setExperienceIndex}>
            <div id='experience'>
                <WebNavBar/>
                {renderExperience(currentExperience)}
            </div>
        </CurrentExperienceIndexProvider>
    )
}
 
export default MyExperience;