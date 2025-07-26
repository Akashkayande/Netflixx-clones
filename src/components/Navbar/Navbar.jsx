import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/assets/logo.png';
import searchicon from '../../assets/assets/search_icon.svg';
import bellicon from '../../assets/assets/bell_icon.svg';
import caret_icon from '../../assets/assets/caret_icon.svg';
import profileimg from '../../assets/assets/profile_img.png';
import { logout } from '../../firebase';

const Navbar = () => {
  const navRef=useRef();
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>=80){
        navRef.current.classList.add("nav-dark")
      }else{
        navRef.current.classList.remove("nav-dark")
      }
    })
  },[])
  return (
    <div ref={navRef} className='navbar'>
        <div className="navbar-left">
            <img src={logo} alt="logo"/>
            <ul>
              <li>Home</li>
              <li>TV Shows & Populer</li>
              <li>My List</li>
              <li>Browse By Language</li>
            </ul>
        </div>
        <div className="navbar-right">
          <img src={searchicon} alt='' className='icons'/>
          <p>Children</p>
          <img src={bellicon} alt='' className='icons'/>
          <div className="navbar-profile">
            <img src={profileimg} alt='' className='profile'/>
            <img src={caret_icon} alt=''/>
            <div className="dropdown">
              <p onClick={()=>{logout()}}>sign out of Netflix</p>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Navbar