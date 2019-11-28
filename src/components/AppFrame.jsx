import React, { Component } from 'react';
import interact from 'interactjs';
import './AppFrame.css';
import { EXPERIENCE_TEXT, SKILLS_TEXT, PROJECTS_TEXT, REFERENCES_TEXT } from '../App';
import MyExperience from './MyExperience';
import MySkills from './MySkills';
import MyProjects from './MyProjects';
import ContactInfo from './ContactInfo.jsx';
import { CONTACT_TEXT } from './StartMenu';
import References from './References';

interact('.draggable').draggable({
    onmove: dragMoveListener,
});

function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

class AppFrame extends Component {
    constructor(props) {
        super(props);
        this.exit = this.exit.bind(this);
        this.focus = this.focus.bind(this);
    }

    focus() {
        this.props.focus(this.props.app);
    }

    exit() {
        this.props.exitApp();
    }

    render() { 
        return (
            <div id={this.props.app === CONTACT_TEXT ? 'canvas-wrap-contact' : 'canvas-wrap'} className="draggable">
                {/* <canvas id="app" ref="app" style={appFrameStyle} width='500px' height='500px'></canvas> */}
                <div id="drag-area-wrap">
                    <div id="drag-area" className="drag-area">
                        <img id ='app-icon' src={require(`../img/icons/${this.props.icon}`)} alt='app icon'></img>
                        <p id="app-title">{this.props.app}</p>
                        <div id="app-controlBtns">
                            <div id="app-exitBtn" onClick={this.exit}>✕</div>
                        </div>
                    </div>
                </div>
                {(()=>{
                    switch(this.props.app) {
                        case EXPERIENCE_TEXT:
                            return <MyExperience></MyExperience>;
                        case SKILLS_TEXT:
                            return <MySkills></MySkills>;
                        case PROJECTS_TEXT:
                            return <MyProjects></MyProjects>;
                        case CONTACT_TEXT:
                            return <ContactInfo></ContactInfo>;
                        case REFERENCES_TEXT:
                            return <References></References>;
                        default:
                            console.log("APP NOT FOUND")
                            return null;
                    }
                })()}
            </div>
        );
    }
}
 
export default AppFrame;