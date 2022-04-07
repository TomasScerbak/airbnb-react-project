import React from 'react'
import starImage from '../Images/Star.png'

export default function Card(props) {
    return (
                <div className='card'>
                    <img src={props.img} alt="random person" />
                    <div class="rating">
                        <img className='star' src={starImage} alt="star rating"/>
                        <span className='opacity'>{props.rating}</span>
                        <span className='opacity'>({props.reviewCount}) - {props.city}</span>
                    </div>
                    <article className='article'>{props.name}</article>
                    <span className='price'>{props.price}</span>
                    <span>/ person</span>
                </div>
    )
}