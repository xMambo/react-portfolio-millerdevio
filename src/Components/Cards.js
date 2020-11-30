import React from 'react'
import Carditem from './Carditem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1> App Portfolio</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <Carditem 
                        src='images/smashbros.png'
                        text='Memory Game - what if i put more words in this box - and even more does it make the image too big'
                        label='Smash'
                        path='https://a-smashbros-clicky.herokuapp.com/'
                        />
                        <Carditem 
                        src='images/burger.png'
                        text='CRUD app - crud app using mongodb and a bunch of other stuff i dont feel like looking up right now'
                        label='List'
                        path='https://a-smashbros-clicky.herokuapp.com/'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <Carditem 
                        src='images/CrystalGame.png'
                        text='Math Memory Game - something to do with crystals value as a number and not busting'
                        label='Math'
                        path='https://a-smashbros-clicky.herokuapp.com/'
                        />
                        <Carditem 
                        src='images/cmms.png'
                        text='CMMS app for robotics - keeps maintenace logs for robots visualized by charts'
                        label='Charts'
                        path='https://a-smashbros-clicky.herokuapp.com/'
                        />
                        <Carditem 
                        src='images/giphy.png'
                        text='Random Gif Generator - Gif Generator using giphy API and databasing'
                        label='API'
                        path='https://a-smashbros-clicky.herokuapp.com/'
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
