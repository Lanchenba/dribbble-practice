import React from 'react'
import './NavBarNew.css'

export default function NavbarNew() {
  return (
    <>
      <div className='navbar-wraper'>
        <div className='navbar-hamburger'>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        </div>
        <div className='navbar-logo'>
          <img src="" alt="logo" />
        </div>
        <div className='navbar-content'>
          <ul className='navbar-list'>
            <li><a href="">Find telent</a></li>
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
            <li><a href="">Log in</a></li>

          </ul>
        </div>
        <div className='navbar-last-wraper'>
          <div className='navbar-last'>
          <div className='navbar-search'>Search</div>
           <div className='navbar-signup'>Sign up</div>
          </div>
           
        </div>
        

      </div>
    </>
  )
}
