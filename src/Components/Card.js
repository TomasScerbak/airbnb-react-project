import React from 'react'
import cardImage from '../Images/cardimageone.png'
import starImage from '../Images/Star.png'

export default function Card() {
    return (
                <div className='card'>
                    <img src={cardImage} alt="random person" />
                    <div class="rating">
                        <img className='star' src={starImage} alt="star rating"/>
                        <span className='opacity'>5.0</span>
                        <span className='opacity'>(6).USA</span>
                    </div>
                    <article className='article'>Life lessons with Kathia Zaferes</article>
                    <span className='price'>From $136 </span>
                    <span>/ person</span>
                </div>
    )
}