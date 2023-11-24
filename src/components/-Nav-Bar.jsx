import React from 'react'
import "../components/NavBar.css"
import dribbble_logo from '../assets/dribbble-icon.png'

export default function NavBar() {
  return (
    <div className='navbar-wrap'>

       <div className='item-1'> <nav className="navbar">
          <ul>
            <li>Find talent</li>
            <li>Inspiration</li>
            <li className="dropdown">
                <span className="dropbtn">Learn Design</span>
                  <div className="dropdown-content">
                    <a href="#">UX Diploma
                    <p>in partnership with UX design institute</p></a>
                  </div>
            </li>
          <li>Jobs</li>
          <li>Go Pro</li>
          </ul>
        
        </nav></div>
       <div className='item-2'>
       <a href="" className="logo">
       <img src={dribbble_logo} alt="logo" />
       </a>
        </div>
      <div className='item-3'>
      <nav className='navbar'>
      <form action="">
        <input type="text" name="" id="" placeholder='Search...' />
      </form>
      <a href="">Login</a>
       <a href="">Signup</a>

        </nav>
      </div>
      
    
   </div>
  )
}
