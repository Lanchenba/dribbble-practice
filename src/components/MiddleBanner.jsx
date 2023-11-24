import React from 'react'
import './MiddleBanner.css'

export default function MiddleBanner() {
  return (
    <>
        <div className='middleBanner-container'>
            <div className='middleBanner-title'>
                Find your next designer today
            </div>
            <div className='middleBanner-content'>
                
      The world's leading brands use Dribbble to hire creative talent. 
      Browse millions of top-rated portfolios to find your perfect creative match.
    
            </div>
            <div className='middleBanner-button'>
                <div className='first-button'>Get started now</div>
                <div className='second-button'>Learn about hirirng</div>
            </div>
            <div className='middleBanner-footer'>
                Are you a designer? <a href="">Join Dribbble</a>
            </div>
        </div>
    </>
  )
}
