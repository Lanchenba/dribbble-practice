import React from 'react'
import '../components/NavBar.css'
import dribbble_logo from '../assets/dribbble-icon.png'

function NavBar() {
  return (
    <>
        <div className='nav-conatianer'>
            <div className='nav1 '> <nav className="navbar">
          <ul>
            <li>Find talent</li>
            <li>Inspiration</li>
            <li className="dropdown">
                <span className="dropbtn">Learn Design</span>
                  <div className="dropdown-content">
                    <a href="#">UX Diploma
                    <span>in partnership with UX design institute</span></a>
                  </div>
            </li>
          <li>Jobs</li>
          <li>Go Pro</li>
          </ul>
        
        </nav></div>
        <div className='nav2 '> 
            <a href="" className="nav-logo">
                <img src={dribbble_logo} alt="logo" />
            </a>
        </div>
        <div className='nav3 '>
          <nav className='navbar-last'>
            <form action="">
            <input className='search' type="text" name="" id="" placeholder='Search...' />
            </form>
            <a className='login' href="">Login</a>
            <a className='singup' href="">Sign up</a>
          </nav>
        </div>
    </div>
    </>
  )
}

export default NavBar