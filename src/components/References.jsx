import React, { Component } from 'react';
import './References.css';
import { REFERENCES_TEXT } from '../App';

class References extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statements: [
                <Erica></Erica>,
                <Andrew></Andrew>
            ],
            currentStatement: 0
        }
        this.nextStatement = this.nextStatement.bind(this);
    }

    nextStatement() {
        var currentStatementIncr = this.state.currentStatement + 1;
        if(currentStatementIncr > this.state.statements.length - 1) {
            this.setState({
                currentStatement: 0
            })
        } else {
            this.setState({
                currentStatement: currentStatementIncr
            })
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.nextStatement)
    }

    render() { 
        return (
            <div id='references'>
                {(()=>{
                    return this.state.statements[this.state.currentStatement]
                })()}
                <p id='continue'>PRESS ANY KEY TO CONTINUE</p>
            </div>
        );
    }
}
 
export default References;

class Erica extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='Statement'>
                <p>"It is a pleasure having Bruno as one of the most valuable members of our team. He is a hard working dedicated man who cares not only about the people he works with, but also about bettering our community of both employees and the families that we work with. As a boss, I feel assured that if Bruno is involved with the task I can feel confident that the job will be done well!"</p>
                <p>-</p>
                <p>Erica Chodkowski</p>
                <p>Director of Academic Staff and Services</p>
                <p>CodeAdvantage LLC</p>
            </div>
        );
    }
}

class Andrew extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className='Statement'>
                <p>"To whom it may concern:<br/><br/>I had the privilege of being Bruno Salgado's mentor in the Software Tools department at Crestron Electronics during the final three-month phase of his 2018 co-op.<br/><br/>Our team was responsible for the development and testing of cross-protocol conversion software for integrating new Crestron devices into legacy systems.<br/><br/>Before joining our team, Bruno spent several months supporting the UI test automation team. Despite the differences between the projects, Bruno adapted nicely to the new work environment. He welcomed challenges and learned whatever was necessary in-depth to do a complete job. He learned and utilized new scripting languages to enhance our existing automated testing capabilities and test results presentation. In particular, I was impressed how he utilized the UI automation skills from the first phase of his co-op to automate particular manual tasks for our project.<br/><br/>Bruno has a very respectful and professional attitude and puts forth extra effort when needed to meet his goals.<br/><br/>Please feel free to <a href="mailto:aschiller@crestron.com">contact me</a> if you would like additional information."</p>
                <p>-</p>
                <p>Andrew Schiller</p>
                <p>Senior Software Engineer</p>
                <p>Crestron Electronics, Inc.</p>
            </div>
        )
    }
}