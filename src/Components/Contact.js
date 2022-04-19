import React from 'react'
import Card from '../Components/Card'
import cardImageOne from '../Images/cardimageone.png'
import cardImageTwo from '../Images/wedding-photography.png'
import cardImageThree from '../Images/mountain-bike.png'

export default function Contacts() {
    return(
        <div className='contacts'>
            <Card
            img={cardImageOne}
            city='USA'
            reviewCount='6'
            rating='5'
            name='Alda Zlinsky'
            price='157$'
            />
            <Card
            img={cardImageTwo}
            city='Chile'
            reviewCount='8'
            rating='4'
            name='Mino Vital'
            price='168$'
            />
            <Card
            img={cardImageThree}
            city='Germany'
            reviewCount='1'
            rating='3'
            name='Peter Pan'
            price='157$'
            />
        </div>
    )
}