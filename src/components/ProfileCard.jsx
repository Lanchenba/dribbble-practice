import React from 'react'
import '../components/ProfileCard.css'

export default function ProfileCard({ title, content, imageUrl, skill }) {
  let cardContainerStyle = {
    background :`url(${imageUrl})`,
    backgroundSize: 'cover', 
    height: '300px'
  }
  return (
    <>
        <div className="card-container card-image" style={cardContainerStyle}>
        
        <div className="card-title ">{title}</div>
        <div className="card-content ">{content}</div>
        <div className='card-skills '>{skill}</div>
        </div>
    </>
  )
}
