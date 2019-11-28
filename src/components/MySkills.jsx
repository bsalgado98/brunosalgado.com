import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';

const skillsRadarData = {
    labels: ['Java', 'Python', 'Swift', 'HTML/CSS', 'JavaScript', 'React'],
    datasets: [
        {
            label: 'Skillset Proficiency Distribution',
            backgroundColor: 'rgba(1, 0, 107, 0.5)',
            borderColor: '#c0c0c0',
            pointBackgroundColor: 'white',
            pointBorderColor: 'rgba(1, 0, 107, 4)',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            pointLabelFontSize: 36,
            display: false,
            data: [65, 59, 55, 81, 70, 70]
        },
    ]
};

const skillsRadarOptions = {
    scale: {
        ticks: {
            display: false
        },
        pointLabels: {
            fontSize: 20,
            fontFamily: 'none',
            fontColor: 'black'
        }
    },
}

const skillsStyle = {
    backgroundColor: '#c0c0c0',
    borderLeft: '1px solid white',
    borderBottom: '1px solid black',
    borderRight: '1px solid black'
}

class MySkills extends Component {
    state = {  }
    render() { 
        return (
            <div style={skillsStyle}>
                <Radar data={skillsRadarData} options={skillsRadarOptions}></Radar>
            </div>
        );
    }
}
 
export default MySkills;