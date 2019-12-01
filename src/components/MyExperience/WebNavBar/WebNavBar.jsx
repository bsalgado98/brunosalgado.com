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
                    <div className='Arrow'>
                        <span className='ArrowBase'/>
                        <span className='ArrowForward'/>
                    </div>
                    <p>{text}</p>
                </div>
            )
        case 'Back':
            return (
                <div className='WebNavBarItem' onClick={() => currentExperienceIndex(-1)}>
                    <div className='Arrow'>
                        <span className='ArrowBack'/>
                        <span className='ArrowBase'/>
                    </div>
                    <p>{text}</p>
                </div>
            )
        case 'Go':
            return (
                <div className='WebNavBarItem'>
                    <p>&#8618;{text}</p>
                </div>
            )
        case 'Refresh':
            return (
                <div className='WebNavBarItem'>
                    <p
                        style = {{
                            display: 'flex',
                            fontSize: '32px',
                            textDecoration: 'none',
                            color: 'green',
                            alignSelf: 'center'
                        }}
                    >&#8634;</p>
                    <p>{text}</p>
                </div>
            )
        default:
            return (
            text
            ? 
            <div className='WebNavBarItem'>
                <img src={img ? require(`../../../img/icons/${img}.png`) : ''}></img>
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
        {text: 'Stop', img: 'web-nav-bar-stop'},
        {text: 'Refresh', img: null},
        {text: 'Home', img: 'web-nav-bar-print'},
        {text: null, img: null}, //Vertical bar
        {text: 'Search', img: 'web-nav-bar-search'},
        {text: 'Favorites', img: 'web-nav-bar-favorites'},
        {text: 'Media', img: 'web-nav-bar-media'},
        {text: 'History', img: 'web-nav-bar-history'},
        {text: null, img: null}, //Vertical bar
        {text: 'Mail', img: 'web-nav-bar-mail'},
        {text: 'Print', img: 'web-nav-bar-print'},
        {text: 'Edit', img: 'web-nav-bar-edit'}
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