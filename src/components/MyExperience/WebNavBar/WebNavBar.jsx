import React, { useContext } from 'react'
import './WebNavBar.css'
import CurrentExperienceIndexContext from '../CurrentExperienceIndexContext'
let currentExperienceIndex
const WebNavBarItem = ({text, img}) => {
    // return (
    //     text === 'URL'
    //     ? (
    //     <div id='url-bar-entry'>
    //         <img src=''/>
    //         <p>https://brunosalgado.com/MyExperience.html</p>
    //         <span id='url-bar-down'>&#9662;</span>
    //     </div>)
    //     : (text ? (
    //         <div className="WebNavBarItem" onClick={() => {
    //             console.log('hey jude')
    //             currentExperienceIndex(1)
    //         }}>
    //             {img ? <img src={`../../../img/icons/${img}.png`}/>: ''}
    //             <p>{text}</p>
    //         </div>
    //     ) : <span className="WebNavBarVerticalBar"/>
    //     )
    // )
    switch (text) {
        case 'URL':
            return (
                <div id='url-bar-entry'>
                    <img src=''/>
                    <p>https://brunosalgado.com/MyExperience.html</p>
                    <span id='url-bar-down'>&#9662;</span>
                </div>
            )
        case 'Forward':
            return (
                <div className='WebNavBarItem' onClick={() => currentExperienceIndex(1)}>
                    <img src=''></img>
                    <p>{text}</p>
                </div>
            )
        case 'Back':
            return (
                <div className='WebNavBarItem' onClick={() => currentExperienceIndex(-1)}>
                    <img src=''></img>
                    <p>{text}</p>
                </div>
            )
        default:
            return (
            text
            ? 
            <div className='WebNavBarItem'>
                <img src=''></img>
                <p>{text}</p>
            </div>
            : <span className='WebNavBarVerticalBar'></span> )
    }
}

const WebNavBarRow = ({items, name}) => {
    return (
        <div className="WebNavBarRow">
            {items.map((item, index) => {
                return (<WebNavBarItem text={item.text} img={item.img} key={name + '-' + index}/>)
            })}
        </div>
    )
}

const WebNavBar = () => {
    const toolBarItems = [
        {text: 'File', img: null},
        {text: 'Edit', img: null},
        {text: 'View', img: null},
        {text: 'Favorites', img: null},
        {text: 'Tools', img: null},
        {text: 'Help', img: null}
    ]
    const navBarItems = [
        {text: 'Back', img: null},
        {text: 'Forward', img: null},
        {text: 'Stop', img: null},
        {text: 'Refresh', img: null},
        {text: 'Home', img: null},
        {text: null, img: null}, //Vertical bar
        {text: 'Search', img: null},
        {text: 'Favorites', img: null},
        {text: 'Media', img: null},
        {text: 'History', img: null},
        {text: null, img: null}, //Vertical bar
        {text: 'Mail', img: null},
        {text: 'Print', img: null},
        {text: 'Edit', img: null}
    ]
    const urlBarItems = [
        {text: 'Address', img: null},
        {text: 'URL', img: null},
        {text: 'Go', img: null},
        {text: null, img: null}, //Vertical bar
        {text: 'Links', img: null}
    ]
    currentExperienceIndex = useContext(CurrentExperienceIndexContext)
    return (
        <div id="web-nav-bar">
            <WebNavBarRow items={toolBarItems} name='tool-bar'/>
            <WebNavBarRow items={navBarItems} name='nav-bar'/>
            <WebNavBarRow items={urlBarItems} name='url-bar'/>
        </div>
    )
}
export default WebNavBar