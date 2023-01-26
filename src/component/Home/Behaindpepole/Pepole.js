import React from 'react'
import './Pepole.css'
import ImgPepole1 from '../../../Assetes/pepole1.jpg'
import ImgPepole2 from '../../../Assetes/pepole2.jpg'
import ImgPepole3 from '../../../Assetes/pepole3.jpg'
import ImgPepole4 from '../../../Assetes/pepole4.jpg'

 const Pepole = () => {
  return (
    <section className='pepole' id='pepole'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 services-content'>
                    <h2 className='title'>BEHIND THE PEOPLE</h2>
                    <p>
                         It is a long established fact that create category leading brand experiences a reader
                         will be distracted by the readable content of a page when looking at its layout.
                    </p>
                </div>
            </div>
            <div className='row pepole-detail'>
                <div className='col-lg-3 col-md-6 line '>
                    <img src={ImgPepole1}/>
                    <h5>Frank Johnson</h5>
                    <p>CEO</p>
                    <hr/>
                </div>
                <div className='col-lg-3 col-md-6 line'>
                    <img src={ImgPepole2}/>
                    <h5>Elaine Stclair</h5>
                    <p>DESIGNER</p>
                    <hr/>
                </div>
                <div className='col-lg-3 col-md-6 line '>
                    <img src={ImgPepole3}/>
                    <h5>Wanda Arthur</h5>
                    <p>DEVELOPER</p>
                    <hr/>
                </div>
                <div className='col-lg-3 col-md-6 line'>
                    <img src={ImgPepole4}/>
                    <h5>Joshua Stemple</h5>
                    <p>MANAGER</p>
                    <hr/>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Pepole;
