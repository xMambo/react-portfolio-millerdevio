import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video.mp4" autoPlay loop muted />
            <h1>millerdev.io</h1>
            <p></p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    DESIGN
                </Button>
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    DEVELOP
                </Button>
            </div>
        </div>
    );
}

export default HeroSection
