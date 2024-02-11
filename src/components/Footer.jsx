import React from 'react'

import '../styles/Footer.css'

import twitterIcon from '../assets/icons/twitter.png'
import instagramIcon from '../assets/icons/instagram.png' 

const Footer = () => {
  return (
    <footer>
        <div className='footer-flex'>
            <div className='store-locator-column'>
                <ul className='footer-column'>
                    <li className='footer-title'>STORE LOCATOR</li>
                    <li className='find-store-btn'>FIND STORE</li>
                </ul>
            </div>
            <div className='help-and-info-column footer-column'>
                <ul className='footer-column'>
                    <li className='footer-title'>HELP AND INFORMATION</li>
                    <li className='column-sub'>Help Center</li>
                    <li className='column-sub'>Ordering & Payment</li>
                    <li className='column-sub'>Shipping</li>
                    <li className='column-sub'>Returns</li>
                    <li className='column-sub'>Reviews</li>
                    <li className='column-sub'>Contact Us</li>
                </ul>
            </div>
            <div className='company-column'>
                <ul className='footer-column'>
                    <li className='footer-title'>COMPANY</li>
                    <li className='column-sub'>Careers</li>
                    <li className='column-sub'>Accessibility</li>
                    <li className='column-sub'>Cookie Preference</li>
                    <li className='column-sub'>Terms & Conditions</li>
                    <li className='column-sub'>Privacy Policy</li>
                </ul>
            </div>
            <div className='socials-column'>
                <div className='icon-wrapper'>
                    <img src={twitterIcon} alt="" />
                </div>
                <div className='icon-wrapper'>
                    <img src={instagramIcon} alt="" />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer