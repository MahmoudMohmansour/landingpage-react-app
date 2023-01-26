import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faAddressCard, faArrowRight, faBullseye, faCaretRight, faPencil } from '@fortawesome/free-solid-svg-icons'

import './Work.css'

 const Works = () => {
  return (
    <section className='work-process'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 services-content'>
                    <h2>WORK PROCESS</h2>
                    <p>
                         It is a long established fact that create category leading brand experiences a reader
                         will be distracted by the readable content of a page when looking at its layout.
                    </p>
                </div>
            </div>
            <div className='row  '>
                <div className='col-lg-2 col-md-2 '>
                    <div className='work'>
                        <FontAwesomeIcon icon={faPencil}/>
                        <h4>Tell us what you need</h4>
                        <p>The Big Oxmox advised her not to do so.</p>
                    </div>
                </div>
                <div className='col-lg-2 col-md-2 '>
                     <div className='icon'>
                        <FontAwesomeIcon icon={faCaretRight}/>    
                     </div>
                </div>
                <div className='col-lg-2 col-md-2 '>
                    <div className='work'>
                        <FontAwesomeIcon icon={faAddressCard}/>
                        <h4>Get free quotes</h4>
                        <p>The Big Oxmox advised her not to do so.</p>
                    </div>
                </div>
                <div className='col-lg-2 col-md-2 '>
                     <div className='icon'>
                        <FontAwesomeIcon icon={faCaretRight}/>    
                     </div>
                </div>
                <div className='col-lg-2 col-md-2 '>
                    <div className='work'>
                        <FontAwesomeIcon icon={faBullseye}/>
                        <h4>Deliver high quality</h4>
                        <p>The Big Oxmox advised her not to do so.</p>
                    </div>
                </div>
            </div>
            <div className='row '>
                <div className='col-md-12 col-lg-12'>
                    <div className='work-btn'>
                        <button>Get Startted <FontAwesomeIcon icon={faArrowRight}/> </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Works
