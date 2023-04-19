import React, { useState, useEffect, useContext, useRef } from "react"
import "./MyExperience.css"
import WebNavBar from "./WebNavBar/WebNavBar"
import { CurrentExperienceIndexProvider } from "./CurrentExperienceIndexContext"
import { GoogleMap, LoadScript } from "@react-google-maps/api"
const amexLogo = require("../../img/logos/amex-logo.png")
const zillowLogo = require("../../img/logos/zillow.png")
const jnjLogo = require("../../img/logos/jnj.png")
const crestronLogo = require("../../img/logos/crestron.png")

const MyExperience = () => {
    const experiencePageRef = useRef()
    const experiences = ["Amex", "Zillow", "JnJ", "SERC", "Crestron"]
    let CurrentExperienceIndexContext = React.createContext(0)
    const [currentExperienceIndex, setCurrentExperienceIndex] = useState(
        useContext(CurrentExperienceIndexContext)
    )
    const [currentExperience, setCurrentExperience] = useState(
        experiences[currentExperienceIndex]
    )
    const [mapContainerStyle, setMapContainerStyle] = useState({
        width: '1px',
        height: '1px'
    })
    const [mapHeading, setMapHeading] = useState(0)
    const defaultMapOptions = {
        disableDefaultUI: true,
        mapId: "ce825800c289678d",
        tilt: 50
    }

    useEffect(() => {
        setMapContainerStyle({
            width: `${experiencePageRef.current.offsetWidth}px`,
            height: '200px'
        })

        const interval = setInterval(() => {
            setMapHeading(prev => prev + 1)
        }, 75)

        return () => clearInterval(interval)
    }, [])

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

    const experienceBody = {
        Amex: {
            logo: amexLogo,
            company: 'American Express',
            mapOptions: {
                center: {
                    lat: 40.71387939415788,
                    lng: -74.01469484214867
                },
                zoom: 13
            },
            body: [
                {
                    position: 'Software Engineer II, April 2023 - Present',
                    team: 'Modern Accounts Receivable System (MARS)',
                    description: <p>In progress...</p>
                },
                {
                    position: 'Software Engineer III, August 2021 - March 2023',
                    team: 'B2B Supplier Analytics',
                    description:
                        <ul>
                            <li>Spearheaded benchmarking features allowing clients to compare their accounts payable departments against industry standards</li>
                            <li>Architected entire end-to-end regression testing suite using Java, Selenium, and Sauce Labs which resulted in 50% faster turnaround time for post-deployment testing</li>
                            <li>Delivered a keystone frontend feature that enabled customers to view and download critical merchant terms and details</li>
                        </ul>
                }
            ]
        },
        Zillow: {
            logo: zillowLogo,
            company: 'Zillow',
            mapOptions: {
                center: {
                    lat: 47.607809531442754,
                    lng: -122.33830156442414
                },
                zoom: 17
            },
            body: [
                {
                    position: 'Software Engineer Intern, June - August 2020',
                    team: 'Agent Customer Experience (ACE) Group, Agent Ready Consumers (ARCs) Team',
                    description:
                        <ul>
                            <li>Implemented an A/B testing experiment on the customer-facing property contact form which provided invaluable insight on user preferences and helped Product Managers make informed decisions</li>
                            <li>Replicated an existing API endpoint's functionality for accessing a read-replica database's advertising campaigns that improved efficiency and performance by 50%</li>
                            <li>Provided full-test coverage for the "Take a Tour" time dropdown selection system which exposed issues and vulnerabilities within Zillow's testing suite</li>
                        </ul>
                }
            ]
        },
        JnJ: {
            logo: jnjLogo,
            company: 'Johnson & Johnson',
            mapOptions: {
                center: {
                    lat: 40.572137113906344,
                    lng: -74.65650359995752
                },
                zoom: 17
            },
            body: [
                {
                    position: 'Software Engineer Co-op, September - December 2019',
                    team: 'Technology Services, Software Engineering and Emerging Technology (SWEET) Team',
                    description:
                        <ul>
                            <li>Designed and implemented the animation for a new virtual assistant using Three.js by working closely with a design contractor and providing daily iterations of the assistant</li>
                            <li>Directed discussions with external resources, including Apple engineers and off-shore teams, in order to facilitate a time-sensitive API integration</li>
                        </ul>
                },
                {
                    position: 'IT Co-op, January - August 2019',
                    team: 'Supply Chain, Customer Connectivity, Digital Channels Team',
                    description:
                        <ul>
                            <li>Re-engineered a Robotic Process Automation project by negotiating requirements with team lead resulting in $22,000 in savings</li>
                        </ul>
                }
            ]
        },
        SERC: {
            logo: null,
            company: 'Systems Engineering Research Center (SERC)',
            mapOptions: {
                center: {
                    lat: 40.74283454491588,
                    lng: -74.02647772325001
                },
                zoom: 18
            },
            body: [
                {
                    position: 'Web Engineer, September - December 2018',
                    team: 'HELIX Research Team',
                    description:
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
                }
            ]
        },
        Crestron: {
            logo: crestronLogo,
            company: 'Crestron Electronics',
            mapOptions: {
                center: {
                    lat: 41.01070217594561,
                    lng: -73.93624046003306
                },
                zoom: 17
            },
            body: [
                {
                    position: 'Systems Test Engineer Co-op, January - August 2018',
                    team: 'Software Tools, Crestron Toolbox, Verification Engineering Team',
                    description:
                        <p>
                            As part of the UI Test Automation team, I developed
                            automated tests using VBScript and the TestComplete
                            IDE. I wrote code for brand new tests that covered
                            some of the company's most important software,
                            including Crestron Studio and Crestron Toolbox.
                        </p>
                }
            ]
        }
    }

    const renderExperience = experience => {
        return (
            <div ref={experiencePageRef} className="ExperiencePage">
                <div className="MapContainer">
                    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                        <GoogleMap
                            options={{...defaultMapOptions, ...experience.mapOptions}}
                            mapContainerStyle={mapContainerStyle}
                            heading={mapHeading}
                        ></GoogleMap>
                    </LoadScript>
                </div>
                <span className="MapOverlayContainer"></span>
                <div className="ExperienceTitle">
                    <img src={experience.logo}></img>
                    <h1 className="ExperienceTitleName">{experience.company}</h1>
                </div>
                {
                    experience.body.map((data, idx) => {
                        return (
                            <div key={`experience-${idx}`}>
                                <h2>{data.position}</h2>
                                <h3 className="ExperienceTeamTitle">{data.team}</h3>
                                {data.description}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    useEffect(() => {
        setCurrentExperience(experiences[currentExperienceIndex])
    }, [currentExperienceIndex])
    return (
        <CurrentExperienceIndexProvider value={setExperienceIndex}>
            <div id="experience">
                <WebNavBar />
                {renderExperience(experienceBody[currentExperience])}
            </div>
        </CurrentExperienceIndexProvider>
    )
}

export default MyExperience
