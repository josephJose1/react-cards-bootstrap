import React from 'react';
import ImageAlter from '../assets/images/image_alternative.png';
import '../stylesheets/Card.css'

function Card({ title='not available', text, image }) {
  return (
    <div className='card text-center animate__animated animate__fadeInUp'>
      <div className="overflow">
        <img src={
          image ? image : ImageAlter
          } alt="image1"
          className='card-img-top' />
      </div>
      <div className="card-body bg-dark text-white">
        <h4 className='card-title ' > {title} </h4>
        <p className='card-text text-secondary'>
          {
            text ? text : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit amet est voluptas iusto id minus ducimus, velit sit deserunt praesentium totam modi perferendis ex laboriosam deleniti sunt quaerat! Maiores, totam!'
          }
        </p>
        <a href="#!" className='btn btn-outline-secondary rounded-0'>Go to this website</a>
      </div>
    </div>
  )
}

export default Card;