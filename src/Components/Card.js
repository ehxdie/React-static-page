import React from 'react'
import star from './Images/Star 1.png'



function Card(props) {
  let badgeInfo
  if (props.item.openSpots === 0){
    badgeInfo = "SOLD OUT"
  }else if(props.item.location === "Online"){
    badgeInfo = "Online"
  }else{
    badgeInfo = ""
  }

  return (

    <div className='Card'>
      <div className='card-badge'> {badgeInfo} </div>
      <div className='Card-1'>
        <img src={props.item.coverImg} className='Card1-image'></img>
        <div className='Card1-stats'>
          <img src={star} className='star-image'></img>
          <span> {props.item.stats.rating}</span>
          <span className='gray'> {props.item.stats.reviewCount} .</span>
          <span className='gray'>{props.item.location}</span>
          <p className='p1'>{props.item.title}</p>
          <p className='p2'> From <strong>${props.item.price} </strong>/ person</p>
        </div> 
      </div>
   

    </div>
  )
}

export default Card