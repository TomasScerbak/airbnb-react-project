import React from 'react'
import cardImage from '../Images/cardimageone.png'
import starImage from '../Images/Star.png'

export default function Card() {
    return (
        <section>
            <div className='card'>
                <img src={cardImage} alt="random person" />
                <div class="rating">
                    <img className='star' src={starImage} alt="star rating"/>
                    <span>5.0</span>
                    <span>(6).USA</span>
                </div>
            </div>
        </section>
    )
}