import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src={assets.logo_text} alt='logo'/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias voluptates facere repellendus quos officiis repudiandae rem, iusto id necessitatibus, iure vel? Atque iste nobis magnam tenetur eius tempora nam placeat!</p>
          <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt=''/>
            <img src={assets.instagram_icon} alt=''/>
            <img src={assets.linkedin_icon} alt=''/>
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul> 
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+48-123-456-789</li>
              <li>contact@email.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-cipyright'>Copyright 2024 © TheRedCafe.com - all Right Reserved.</p>
    </div>
  )
}

export default Footer
