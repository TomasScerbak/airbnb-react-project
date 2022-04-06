import React from 'react'
import heroImage from '../Images/hero-grid.png'

export default function Hero() {
    return(
        <section className='hero-wrapper'>
            <img className='hero__image' src={heroImage} alt='collection of random images forming grid'/>
            <div className="hero__body">
                <h1>Online Experience</h1>
                <p className='hero__text'>Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.</p>
            </div>
        </section>
    )
}