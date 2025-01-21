import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.jpeg'
import insta from '../Assets/insta.png'
import pintrest from '../Assets/pintrest.png'
import whatsapp from '../Assets/whatsapp.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-container"><img src={insta} alt="" /></div>
            <div className="footer-container"><img src={pintrest} alt="" /></div>
            <div className="footer-container"><img src={whatsapp} alt="" /></div>
           
             
            
        </div>
        <div className="footer-copy-right">
            <hr />
            <p>Copyright @ 2025 All Right Reserved.</p>
        </div>
    </div>
  )
}
export default Footer