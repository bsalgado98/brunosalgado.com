import React, { useState, useEffect, useContext } from "react"
import "./MyExperience.css"
import WebNavBar from "./WebNavBar/WebNavBar"
import { CurrentExperienceIndexProvider } from "./CurrentExperienceIndexContext"
// import { zillowLogo } from "../../img/logos/zillow.png"
const zillowLogo = require("../../img/logos/zillow.png")
const jnjLogo = require("../../img/logos/jnj.png")
const crestronLogo = require("../../img/logos/crestron.png")

const MyExperience = () => {
    const experiences = ["Zillow", "JnJ1", "JnJ2", "SERC", "Crestron"]
    let CurrentExperienceIndexContext = React.createContext(0)
    const [currentExperienceIndex, setCurrentExperienceIndex] = useState(
        useContext(CurrentExperienceIndexContext)
    )
    // let currentExperience = experiences[currentExperienceIndex]
    const [currentExperience, setCurrentExperience] = useState(
        experiences[currentExperienceIndex]
    )
    function setExperienceIndex(valueToAdd) {
        setCurrentExperienceIndex((prev) => {
            prev += valueToAdd
            if (prev < 0) {
                prev = experiences.length - 1
            } else if (prev >= experiences.length) {
                prev = 0
            }
            return prev
        })
    }
    const renderExperience = (name) => {
        const teamStyle = { color: "gray" }
        switch (name) {
            case "Zillow":
                return (
                    <div className="ExperiencePage">
                        <div className="ExperienceTitle">
                            <img src={zillowLogo}></img>
                            <h1 className="ExperienceTitleName">Zillow</h1>
                        </div>
                        <h4>Software Engineer Intern, June - August 2020</h4>
                        <h4 style={teamStyle}>
                            Agent Customer Experience (ACE) Group, Agent Ready
                            Consumers (ARCs) Team
                        </h4>
                        <ul>
                            <li>React</li>
                            <li>A/B Testing</li>
                            <li>Python API Development</li>
                        </ul>
                    </div>
                )
            case "JnJ1":
                return (
                    <div className="ExperiencePage">
                        <div className="ExperienceTitle">
                            <img src={jnjLogo}></img>
                            <h1 className="ExperienceTitleName">
                                Johnson &amp; Johnson
                            </h1>
                        </div>
                        <h4>
                            Software Engineer Co-op, September - December 2019
                        </h4>
                        <h4 style={teamStyle}>
                            Technology Services, Software Engineering and
                            Emerging Technology (SWEET) Team
                        </h4>
                        <ul>
                            <li>React</li>
                            <li>Three.js</li>
                            <li>Created a chatbot for drug facts on a newly released medicine</li>
                        </ul>
                    </div>
                )
            case "JnJ2":
                return (
                    <div className="ExperiencePage">
                        <div className="ExperienceTitle">
                            <img alt="johnson and johnson logo" src={jnjLogo}></img>
                            <h1 className="ExperienceTitleName">
                                Johnson &amp; Johnson
                            </h1>
                        </div>
                        <h4>IT Co-op, January - August 2019</h4>
                        <h4 style={teamStyle}>
                            Supply Chain, Customer Connectivity, Digital
                            Channels Team
                        </h4>
                        <ul>
                            <li>RPA (Robotic Process Automation)</li>
                            <li>Swift</li>
                            <li>UI/UX</li>
                        </ul>
                    </div>
                )
            case "SERC":
                return (
                    <div className="ExperiencePage">
                        <div className="ExperienceTitle">
                            <h1>Systems Engineering Research Center (SERC)</h1>
                            <img src=""></img>
                        </div>
                        <h4>Web Engineer, September - December 2018</h4>
                        <h4 style={teamStyle}>HELIX Research Team</h4>
                        <p>
                            I was responsible for designing and developing a
                            website to showcase the research efforts of the
                            Helix team. Their work was a behavioral study on
                            Systems Engineers and their role within an
                            organization. I had weekly meetings with the team
                            lead to discuss website requirements and gather
                            feedback in regards to the style of the web page. My
                            work can be seen{" "}
                            <strong>
                                <a href="https://helix-se.org">here.</a>
                            </strong>
                        </p>
                    </div>
                )
            case "Crestron":
                return (
                    <div className="ExperiencePage">
                        <div className="ExperienceTitle">
                            <img src={crestronLogo}></img>
                            <h1 className="ExperienceTitleName">
                                Crestron Electronics
                            </h1>
                        </div>
                        <h4>
                            Systems Test Engineer Co-op, January - August 2018
                        </h4>
                        <h4 style={teamStyle}>
                            Software Tools, Crestron Toolbox, Verification
                            Engineering Team
                        </h4>
                        <p>
                            As part of the UI Test Automation team, I developed
                            automated tests using VBScript and the TestComplete
                            IDE. I wrote code for brand new tests that covered
                            some of the company's most important software,
                            including Crestron Studio and Crestron Toolbox.
                        </p>
                    </div>
                )
            default:
                console.log("EXPERIENCE NOT FOUND")
        }
    }
    useEffect(() => {
        console.log("hi")
        setCurrentExperience(experiences[currentExperienceIndex])
    }, [currentExperienceIndex])
    return (
        <CurrentExperienceIndexProvider value={setExperienceIndex}>
            <div id="experience">
                <WebNavBar />
                {renderExperience(currentExperience)}
            </div>
        </CurrentExperienceIndexProvider>
    )
}

export default MyExperience
