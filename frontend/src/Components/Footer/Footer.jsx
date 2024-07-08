import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.jpg'
import instagram_icon from '../Assets/instagram.jpeg'
import pinterest_icon from '../Assets/pinterest.png'
import whatsapp_icon from '../Assets/whatsapp.png'
 const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" style={{width:"120px", height: "40px"}} />
            
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Product</li>
<li>Offices</li>
<li>About</li>
<li>Contact</li>

        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" style={{width:"40px", height: "40px"}} />
            </div>
            <div className="footer-icons-container">
                <img src={pinterest_icon} alt=""style={{width:"40px", height: "40px"}} />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt=""style={{width:"40px", height: "40px"}} />
            </div>
        </div>
        <div className="foter-copyright">
            <hr/>
            <p>Copyright @ 2024 - All Right Reserved</p>
        </div>
    </div>
  )
}
export default Footer;
