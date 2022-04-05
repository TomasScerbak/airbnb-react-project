import React from 'react'
import heroImage from '../Images/hero-grid.png'

export default function Hero() {
    return(
        <div className='hero-wrapper'>
            <img className='hero-image' src={heroImage} alt='collection of random images forming grid'/>
        </div>
    )
}