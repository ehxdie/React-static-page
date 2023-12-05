import React from 'react'
import hero_images from './Images/Group 77.png'

function Hero() {
  return (
    <div className='Hero'>
      <img src={hero_images} className="Hero-image"></img>
      <h1 className='Hero-title'> Online Experiences </h1>
        <p className='Hero-content'> Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>  
    </div>
  )
}

export default Hero