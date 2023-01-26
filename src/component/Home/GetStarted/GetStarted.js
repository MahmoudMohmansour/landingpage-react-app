import React from 'react'
import './GetStarted.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import {  faArrowRight} from '@fortawesome/free-solid-svg-icons'

 const GetStarted = () => {
  return (
    <section className='getstarted'>
        
            <div className='row'>
                <div className='get-overlay'>
                    <div className='col-lg-12 col-md-12'>
                            {/* <div className='get-title'> */}
                                <h3>Let's Get Started</h3>
                                <p>
                                    Far far away, behind the word mountains,
                                    far from the countries Vokalia and Consonantia, there live the blind texts.
                                </p>
                                <button>Get Started <FontAwesomeIcon icon={faArrowRight}/></button>
                            
                    </div>
                </div>   
            </div>
        
    </section>
  )
}
export default GetStarted;
