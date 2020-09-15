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
                        <p>
                            Zillow: A real challenge, giant leap, and extreme
                            learning experience all in one. If I could give my
                            time at Zillow a tagline, that would surely be it.
                            <br />
                            <br />
                            Zillow was my first "breakthrough" or
                            "widely-recognized" tech company that truthfully
                            added a lot of weight to my resume which I could
                            tell both from peers who read my resume as well as
                            recruiters themselves.
                            <br />
                            <br />
                            My team, the ARCs (Agent Ready Consumers) team, was
                            a total of 7 engineers, backend, frontend, and
                            fullstack, all working on the contact form piece of
                            the Zillow website/mobile app. If you've ever used
                            Zillow yourself, you'll know that when you search an
                            area, click on a property, and see the property
                            details (known internally as "home details
                            content"), there are two buttons at the top of the
                            details side panel which are usually "Ask an Agent"
                            and "Take a Tour," depending on the property. My
                            team owned those buttons, the corresponding modals
                            that popped up upon clicking them, and some backend
                            functionality related to delivering the form data to
                            the rest of the data pipeline.
                            <br />
                            <br />
                            In terms of what I worked on, I saw even more work
                            with React, unit testing, integration testing, A/B
                            tests, coding for accessibility, and even my first
                            backend task ever: replicating API functionality
                            into a brand new endpoint in Python. I think the A/B
                            test and the Python endpoint are arguably the most
                            interesting topics to discuss with peers and in
                            interviews, mostly because they're the easiest to
                            grasp at a high level.
                            <br />
                            <br />
                            The A/B test I wrote started off as an idea from my
                            Product Manager, Liz, who noticed in the KPI (key
                            performance indicator, a fancy term for any metric
                            deemed useful for advancing a business goal) data
                            that many users were submitting the property
                            interest form without actually modifying the message
                            field which prefills with "Hi, I am interested in
                            `property_name_here`." My job was simply to
                            implement a React A/B test that would randomly
                            assign a version of this form to users that either
                            has the message box, or doesn't. The hopes were that
                            we would prove our hypothesis that more people would
                            submit the form if they didn't see the message box
                            in it.
                            <br />
                            <br />
                            For the API endpoint, my job was to replicate
                            functionality from the "ads campaign" database which
                            was responsible for serving advertisements to
                            Zillow.com. The new database they wanted to tie in
                            was a "read replica" of the original ads database.
                            The purpose of using read replicas is essentially
                            that this kind of database can only be "read from"
                            (hence the name) and not "written to." The assurance
                            that no two connections to the database will affect
                            each other, like in a read-write scenario,
                            ultimately improves performance and lookup speeds
                            thus providing a better user experience.
                            <br />
                            <br />
                            The biggest challenge in this internship with Zillow
                            was the large skill gap I needed to clear to keep up
                            with the development pace and code quality bar. One
                            brand new thing I got to experience was actually
                            writing my own code specifications and acceptance
                            criteria. Typically, I was used to the traditional
                            approach to software engineering, which was where a
                            Product Owner would clearly define each task and
                            give acceptance criteria from which developers can
                            base their code on. Zillow operates much like
                            Microsoft, for example, in that engineers are
                            expected to get enough context on a task to write
                            their own specifications and acceptance criteria.
                            This new level of independence was a challenge but
                            the growth I saw because of it was immeasurable and
                            humbling. Thanks Zillow for the awesome lessons
                            learned!
                        </p>
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
                        <p>
                            After I finished up my term at J&amp;J in Supply
                            Chain in Piscataway, I transferred over to the team
                            I was ultimately vying for: SWEET (Software
                            Engineering and Emerging Technology).
                            <br />
                            <br />
                            This team focused entirely on software engineering
                            at its core and functioned almost like a small
                            startup within the massive corporation that is
                            Johnson &amp; Johnson. On a team of about 20 total
                            engineers, some of these engineers would specialize
                            in mobile development, some in backend development,
                            and some even in cutting edge work such as IoT and
                            Machine Learning.
                            <br />
                            <br />I got very comfortable with the frontend guys
                            (and girl!) and equally comfortable working in React
                            and React Native. I attribute a vast amount of my
                            development as a professional software engineer to
                            these 3 to 4 months spent on the SWEET team.
                            <br />
                            <br />
                            Everything from internal git-tracking mobile
                            applications, chatbot POCs, leading international
                            business conversations (yes, I directed some
                            discussions with Chinese Software Engineers, super
                            awesome), and even creating a siri-like frontend
                            persona (which can be seen in "My Projects" as
                            "JAI"), I learned a terrible lot here and
                            capitalized on this co-op to eventually catapult me
                            to my next journey.
                        </p>
                    </div>
                )
            case "JnJ2":
                return (
                    <div className="ExperiencePage">
                        <div className="ExperienceTitle">
                            <img src={jnjLogo}></img>
                            <h1 className="ExperienceTitleName">
                                Johnson &amp; Johnson
                            </h1>
                        </div>
                        <h4>IT Co-op, January - August 2019</h4>
                        <h4 style={teamStyle}>
                            Supply Chain, Customer Connectivity, Digital
                            Channels Team
                        </h4>
                        <p>
                            The team I joined at Johnson &amp; Johnson was a
                            newly formed team that only had 1 other employee
                            besides my manager. On the Supply Chain, Digital
                            Channels team I was able to spearhead proof of
                            concept projects that served to provide software
                            development services to different product lines in
                            the supply chain organization.
                            <br />
                            <br />
                            Being on the team led me to some exciting
                            opportunities to work on interesting new solutions
                            to supply chain problems. The main project that I
                            led involved creating an iOS mobile application that
                            handled real-time asset tracking within a hospital.
                            The goal was to place beacons on high-value medical
                            assets and be able to locate the precise location of
                            the asset based on beacon geolocation data in
                            conjunction with Apple's new indoor positioning
                            features. As part of the team, I not only took
                            charge of the development effort, but I also
                            directed conversations with Apple Systems Engineers
                            to gather information regarding the capabilities of
                            Apple's CoreLocation software library.
                            <br />
                            <br />
                            This co-op allowed me to develop proficiency in
                            Swift and also gave me insight into how software
                            projects are started and managed. Being able to lead
                            discussions with Apple also allowed me to see what
                            it was like to negotiate requirements in a broader
                            scope than just my immediate team.
                        </p>
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
