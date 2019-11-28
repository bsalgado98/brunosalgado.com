import React, { Component } from 'react';
import './MyProjects.css';

export const CALC_ICON = 'calculator-0.png'

class MyProjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFileItem: null
        }
        this.openFileItem = this.openFileItem.bind(this);
    }

    openFileItem(item) {
        this.setState({
            currentFileItem: item
        })
    }

    render() { 
        return (
            <div id="projects">
                <div id="file-tree">
                    <FileTreeItem item={"EngCalc"} icon={CALC_ICON} openFileItem={this.openFileItem}></FileTreeItem>
                </div>
                <div id="divider"/>
                <div id="file-contents">
                    {(()=>{
                        switch(this.state.currentFileItem) {
                            case "EngCalc":
                                return <EngCalc></EngCalc>;
                            default:
                                return null;
                        }
                    })()}
                </div>
            </div>
        );
    }
}
 
export default MyProjects;

class FileTreeItem extends Component {
    constructor(props) {
        super(props);
        this.openFileItem = this.openFileItem.bind(this);
    }
    openFileItem() {
        this.props.openFileItem(this.props.item)
    }

    render() {
        return(
            <a id="file-tree-item" onClick={this.openFileItem}>
                <img id="file-tree-item-icon" src={require(`../img/icons/${this.props.icon}`)} alt='item icon'></img>
                <p id="file-tree-item-text">{this.props.item}</p>
            </a>
        );
    }
}

class EngCalc extends Component {
    render() {
        return(
            <div>
                <h1>EngCalc</h1>
                <h3>Desktop Application Calculator for Stevens Engineering Economics</h3>
            </div>
        );
    }
}