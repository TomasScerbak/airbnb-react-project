import React from 'react'
import cardImage from '../Images/cardimageone.png'

export default function Card() {
    return (
        <section className='hero-wrapper'>
            <div className='card'>
                <img src={cardImage} alt="random person" />
            </div>
        </section>
    )
}