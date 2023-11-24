import React from 'react'
import { MdFacebook } from "react-icons/md"
import { FaTwitter,FaInstagram, FaPinterest  } from "react-icons/fa";
import dribble_icon from '../assets/dribbble-icon.png'
import './Footer.css'

function Footer() {
  return (
    <>
    <div className='footer-container'>
        <div className='icon'>
            <img src={dribble_icon} alt="" />
        </div>
        <div className='footer-content-wraper'>
            <a href="">For designers</a>
            <a href="">Hire talent</a>
            <a href="">Inspiration</a>
            <a href="">Advertising</a>
            <a href="">Blog</a>
            <a href="">About</a>
            <a href="">Careers</a>
            <a href="">Support</a>
            
        </div>
        <div className='footer-icons'>
        <FaTwitter fontSize="1.3rem" className='twitterIcon'/>
        <MdFacebook fontSize="1.3rem" />
        <FaInstagram fontSize="1.3rem"/>
        <FaPinterest fontSize="1.3rem"/>
        
        </div>
    </div>
 
    </>
  )
}

export default Footer