import React, { Component } from 'react';
import interact from 'interactjs';
import './AppFrame.css';

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

const wrapStyle = {
    position: 'relative',
}

const appFrameStyle = {
    backgroundColor: '#c0c0c0',
}

class AppFrame extends Component {
    state = {  }
    render() { 
        return (
            <div id="canvas-wrap" style={wrapStyle} className="draggable">
                <canvas style={appFrameStyle} width='500px' height='500px'></canvas>
                <div className="drag-area">
                    <img id ='app-icon' src='./windows-logo.png'></img>
                    <p id="app-title">EXTENDED</p>
                    <div id="app-controlBtns">
                        <button id="app-exitBtn">X</button>
                        <button id="app-maxBtn">M</button>
                        <button id="app-minBtn">_</button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AppFrame;