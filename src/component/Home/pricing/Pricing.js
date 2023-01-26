import React from 'react'
import Data from '../../../Data'
import './Pricing.css'

 const Pricing = () => {
    const itempricing=Data.pricing.map((itembox)=>{
        return(
            <div className='col-lg-4 col-md-12 '>
                <div className='box'>
                    <h6>{itembox.title}</h6>
                    <h4>{itembox.price}</h4>
                    <p>{itembox.time}</p>
                    <hr/>
                    <ul>
                        <li>
                            <span>Bandwidth:</span>
                            {itembox.Bandwidth}
                        </li>
                        <li>
                            <span>Online space:</span>
                            {itembox.Onlinespace}
                        </li>
                        <li>
                            <span>Support:</span>
                            {itembox.Support}
                        </li>
                        <li>
                            <span>Domain:</span>
                            {itembox.Domain}
                        </li>
                        <li>
                            <span>Hidden Fees:</span>
                            {itembox.HiddenFees}
                            </li>
                    </ul>
                    <button>Join Now</button>
                </div>
            </div>
        )
    })
  return (
    <section className='pricing' id='pricing'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 services-content'>
                    <h2>Our pricing</h2>
                    <p>
                        We craft digital, graphic and dimensional thinking,
                        to create category leading brand experiences that have meaning and add a value for our clients4.
                    </p>
                </div>
            </div>
            <div className='row'>
                {itempricing}
            </div>
        </div>
    </section>
  )
}
export default Pricing;
