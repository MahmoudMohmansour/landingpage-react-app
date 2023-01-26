import React from 'react'
import './Footer.css'
import Payment from '../../../Assetes/payment.png'

 const Footer = () => {
  return (
    <footer className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='footer-content'>
                    <div className='col-lg-3 col-md-3'>
                        <h4>DORSIN</h4>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Careers</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-3'>
                        <h4>Information</h4>
                        <ul>
                            <li>Terms & Condition</li>
                            <li>About us</li>
                            <li>Jobs</li>
                            <li>Bookmarks</li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-3'>
                        <h4>Support</h4>
                        <ul>
                            <li>FAQ</li>
                            <li>About us</li>
                            <li>Contact</li>
                            <li>Disscusion</li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-3'>
                        <h4>Subscribe</h4>
                    <p>In an ideal world this text wouldnt exist, a client would acknowledge the importance of having web copy before the design starts.</p>
                    <input type='text'/>
                    </div>
                </div>
                
            </div>
           
        </div>
        <div className='row'>
                <div className='col-lg-12 col-md-12 end-footer'>
                    <p>2019 - 2023 © Mans - MahmoudMohamedMansour</p>
                    <img src={Payment}/>
                </div>
            </div>
    </footer>
  )
}
export default Footer;
