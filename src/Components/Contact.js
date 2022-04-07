import React from 'react'
import Card from '../Components/Card'
import cardImage from '../Images/cardimageone.png'

export default function Contacts() {
    return(
        <div className='contacts'>
            <Card
            img={cardImage}
            city='USA'
            rating='5'
            name='Alda'
            price='157$'
            />
            <Card
            img={cardImage}
            city='Chile'
            rating='4'
            name='Mino'
            price='168$'
            />
            <Card
            img={cardImage}
            city='Germany'
            rating='3'
            name='Peter'
            price='157$'
            />
            <Card
            img={cardImage}
            city='Italy'
            rating='3'
            name='John'
            price='20$'
            />
        </div>
    )
}