import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/assets/youtube_icon.png'
import twitter_icon from '../../assets/assets/twitter_icon.png'
import instagram_icon from '../../assets/assets/instagram_icon.png'
import facebook_icon from '../../assets/assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms Of Use</li>
        <li>Privacy</li>
        <li>Lrgal Notices</li>
        <li>Cookie Preferences</li>
        <li>Coporative Information</li>
        <li>Contact Us</li>
      </ul>
      <div className="copyright-text">&copy; 1997-2025 Netflix, Inc.</div>

    </div>
  )
}

export default Footer