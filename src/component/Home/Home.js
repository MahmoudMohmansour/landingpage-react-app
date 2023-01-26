import React, { Fragment } from 'react'
import Pepole from './Behaindpepole/Pepole';
import Blog from './Bolg/Blog';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import GetStarted from './GetStarted/GetStarted';
import Header from './Header/Header';
import './Home.css'
import Pricing from './pricing/Pricing';
import Services from './services/Services';
import Testemonial from './testimonial/Testemonial';
import   Works   from './WorkProcess/Work';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons'

 const Home = () => {
  function scrollToTop() {
    window.scrollTo(0, 0);
}

  return (
   <Fragment>
    <Header/>
    <Services/>
    <Pricing/>
    <Pepole/>
    <Works/>
    <Testemonial/>
    <GetStarted/>
    <Blog/>
    <Contact/>
    <Footer/>
    <div className='home-btn'>
        <button onClick={scrollToTop}><FontAwesomeIcon icon={faArrowAltCircleUp}/></button>
    </div>
   </Fragment>
  )
}
export default Home;
