//rfc
import React from 'react';
import Card from './Card';
import Image1 from '../assets/images/image1.jpg';
import Image2 from '../assets/images/image2.jpg';
import Image3 from '../assets/images/image3.jpg';

const cards = [
  {
    id:1,
    title:'Wolfsider Web',
    image:Image1
  },
  {
    id:2,
    title:'Wolfsider Blog',
    image:Image2
  },
  {
    id:3,
    title:'Wolfsider Youtube',
    image:Image3
  }
]

function Cards() {
  return (
    <div className='container d-flex justify-content-center h-100 align-items-center'>
      <div className="row">
          {cards.map(element => {
            return <div className="col-md-4">
            <Card 
              key = {element.id}
              title = {element.title}
              text = {element.text}
              image = {element.image}
            /> 
            </div>            
            }
          )}
          
      </div>
      
    </div>
  )
}

export default Cards;