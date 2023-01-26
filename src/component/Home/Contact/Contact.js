import React from 'react'
import { Form } from 'react-bootstrap';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF , faTwitter, faLinkedinIn ,faGooglePlus , faXbox , faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { faPhone , faVoicemail } from '@fortawesome/free-solid-svg-icons'


 const Contact = () => {
  return (
    <section className='contact' id='contact'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 services-content'>
                    <h2>GET IN TOUCH</h2>
                    <p>
                         It is a long established fact that create category leading brand experiences a reader
                         will be distracted by the readable content of a page when looking at its layout.
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-4 col-md-12'>
                   <div className='address-contact'>
                        <h6>Office Address 1:</h6>
                        <p>4461 Cedar Street Moro, AR 72368</p>
                        <h6>Office Address 2:</h6>
                        <p>2467 Swick Hill Street New Orleans, LA 70171</p>
                        <h6>Working Hours:</h6>
                        <p>9:00AM To 6:00PM</p>
                   </div>
                </div>
                <div className='col-lg-8 col-md-12'>
                    <Form>
                        
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                            
                            <Form.Control className='input-form' type="text" placeholder="Your name*" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            
                            <Form.Control className='input-form' type="text" placeholder="Your email*" />
                        </Form.Group>
                       
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            
                            <Form.Control className='input-form' type="text" placeholder="Your subject.." />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            
                            <Form.Control  as="textarea" rows={3} placeholder="Your message" />
                        </Form.Group>
                    </Form>
                    <div className='form-btn'>
                        <button>Send Message</button>
                    </div>
                </div>
            </div>
            
        </div>
        <div className='row'>
                <div className='col-lg-12 col-md-12  connection'>
                    <div className='icon-contact'>
                        <FontAwesomeIcon icon={ faFacebookF}/>
                        <FontAwesomeIcon icon={ faTwitter}/>
                        <FontAwesomeIcon icon={ faLinkedinIn}/>
                        <FontAwesomeIcon icon={ faGooglePlus}/>
                        <FontAwesomeIcon icon={ faXbox}/>
                    </div>
                    <div className='phone-contact'>
                        <FontAwesomeIcon icon={faPhone}/>
                        <span>+91 123 4556 789</span>
                    </div>
                    <div className='phone-contact'>
                        <FontAwesomeIcon icon={faGooglePlusG}/>
                        <span>Support@info.com</span>
                    </div>
                </div>
        </div>
    </section>
  )
}
export default Contact;
