import React from 'react'
import Card from '../Components/Card'
import cardImage from '../Images/cardimageone.png'

export default function Contacts() {
    return(
        <div className='contacts'>
            <Card
            img={cardImage}
            city='USA'
            reviewCount='6'
            rating='5'
            name='Alda Zlinsky'
            price='157$'
            />
            <Card
            img={cardImage}
            city='Chile'
            reviewCount='8'
            rating='4'
            name='Mino Vital'
            price='168$'
            />
            <Card
            img={cardImage}
            city='Germany'
            reviewCount='1'
            rating='3'
            name='Peter Pan'
            price='157$'
            />
            <Card
            img={cardImage}
            city='Italy'
            reviewCount='5'
            rating='3'
            name='John Boom'
            price='20$'
            />
        </div>
    )
}