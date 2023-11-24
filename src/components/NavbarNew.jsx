import React from 'react'
import './NavBarNew.css'
import dribbble_logo from '../assets/dribbble-icon.png'
import { CiSearch } from "react-icons/ci";

export default function NavbarNew() {
  return (
    <>
      <div className='navbar-wraper'>
        {/* <div className='navbar-hamburger'>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        </div> */}
        <div className='navbar-content'>
          <ul className='navbar-list'>
            <li><a href="">Find talent</a></li>
            <li><a href="">Inspiration</a></li>
            <li className="dropdown">
                <span className="dropbtn">Learn Design</span>
                  <div className="dropdown-content">
                    <a href="#">UX Diploma
                    <span>in partnership with UX design institute</span></a>
                  </div>
            </li>
            
            <li><a href="">Jobs</a></li>
            <li><a href="">Go Pro</a></li>

          </ul>
        </div>
        <div className='navbar-logo'>
          <img src={dribbble_logo} alt="logo" />
        </div>
        <div className='navbar-last-wraper'>
      
          <form action="">
          <CiSearch /> <input className='input' type="text" placeholder="Search..." />
          </form>
          <a className='login' href="">Login</a>
          <a className='signup' href="">Signup</a>
          </div>
           
        

      </div>
    </>
  )
}
