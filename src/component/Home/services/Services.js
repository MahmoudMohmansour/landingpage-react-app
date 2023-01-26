import React from 'react'
import  Data  from '../../../Data'
import ServItem from './ServItem'
import './Services.css'
import ImgWorld from '../../../Assetes/online-world.svg'


 const Services = () => {
    const item=Data.serv.map((itembox)=>{
        return(
            <div className='col-lg-4 col-md-12'>
              <ServItem title={itembox.title} text={itembox.text} icon={itembox.icon}/>
            </div>
        )
    })
  return (
    <section className='services' id='Services'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 services-content'>
                    <h2>OUR SERVICES</h2>
                    <p>
                        We craft digital, graphic and dimensional thinking,
                        to create category leading brand experiences that have meaning and add a value for our clients4.
                    </p>
                </div>
            </div>
            <div className='row '>
                {item}
            </div>
           
        </div>
        <div id='Features'></div>
        <div className='row service-detail'>
                <div className='col-lg-6 col-md-12'>
                        <h3>A digital web design studio creating modern & engaging online experiences</h3>
                        <p>
                            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                            A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </p>
                        <ul>
                            <li>We put a lot of effort in design.</li>
                            <li>The most important ingredient of successful website.</li>
                            <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
                            <li>Submit Your Organization.</li>
                        </ul>
                        <button>Learn More</button>

                </div>
                <div className='col-lg-6 col-md-6'>
                    <img src={ImgWorld}/>
                </div>
        </div>
            
            <div className='row service-plan'>
                <div className='overlay-plan'>
                    <div className='col-lg-12 col-md-12'>
                        <h3>Build your dream website today</h3>
                        <p>
                            But nothing the copy said could convince
                            her and so it didnt take long until a few insidious Copy Writers ambushed her.
                        </p>
                        <button>View plan & Pricing</button>
                    </div>
                </div>
            </div>
    </section>
   
  )
}
export default Services;
