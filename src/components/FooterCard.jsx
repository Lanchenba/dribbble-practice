import React from 'react'
import '../components/FooterCard.css'

export default function FooterCard({title, imageUrl}) {
  return (
    <>
        <div className='footerCard-wraper'>
            <div className='footerCard-image' >
                <img src={imageUrl} alt="img" />
            </div>
            <div className='footer-title'>{title}</div>
        </div>
    </>
  )
}
