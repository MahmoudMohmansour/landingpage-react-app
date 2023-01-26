import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRight} from '@fortawesome/free-solid-svg-icons'
import './Blog.css'
import Blog1 from '../../../Assetes/blog1.jpg'
import Blog2 from '../../../Assetes/blog2.jpg'
import Blog3 from '../../../Assetes/blog3.jpg'

 const Blog = () => {
  return (
    <section className='blog' id='blog'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 services-content'>
                    <h2>BLOG</h2>
                    <p>
                         It is a long established fact that create category leading brand experiences a reader
                         will be distracted by the readable content of a page when looking at its layout.
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-4 col-md-12'>
                    <div className='blog-detail'>
                        <img src={Blog1}/>
                        <h5>UI & UX Design</h5>
                        <h3>Doing a cross country road trip</h3>
                        <p>She packed her seven versalia, put her initial into the belt and made herself on the way..</p>
                        <button>Read More <FontAwesomeIcon icon={faArrowRight}/></button>    
                    </div>
                </div>
                <div className='col-lg-4 col-md-12'>
                    <div className='blog-detail'>
                        <img src={Blog2}/>
                        <h5>Digital Marketing</h5>
                        <h3>New exhibition at our Museum</h3>
                        <p>She packed her seven versalia, put her initial into the belt and made herself on the way..</p>
                        <button>Read More <FontAwesomeIcon icon={faArrowRight}/></button>    
                    </div>
                </div>
                <div className='col-lg-4 col-md-12'>
                    <div className='blog-detail'>
                        <img src={Blog3}/>
                        <h5>Travelling</h5>
                        <h3>Why are so many people..</h3>
                        <p>She packed her seven versalia, put her initial into the belt and made herself on the way..</p>
                        <button>Read More <FontAwesomeIcon icon={faArrowRight}/></button>    
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Blog;
