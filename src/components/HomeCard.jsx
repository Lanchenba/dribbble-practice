import React from 'react'
import './HomeCard.css'

export default function HomeCard({title, imageUrl, name}) {
    let cardContainerStyle = {
        background :`url(${imageUrl})`,
        backgroundSize: 'cover', 
        height: '200px', 
        width: '300px'
      }
  return (
    <>
   <div className='card-wraper'> <div className="home-card-container card-image" style={cardContainerStyle}>
    <div className="home-card-title ">{title}</div>
    </div>
    <div className='home-name'>
        {name}
    </div>
    </div>
</>
  )
}
