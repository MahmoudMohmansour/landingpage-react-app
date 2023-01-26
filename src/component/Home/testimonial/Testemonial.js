import React from 'react'
import './Testemonial.css'
import User1 from '../../../Assetes/user1.jpg'
import User2 from '../../../Assetes/user2.jpg'
import User3 from '../../../Assetes/user3.jpg'

 const Testemonial = () => {
  return (
    <section className='testemonial'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 services-content'>
                    <h2>WHAT THEY'VE SAID</h2>
                    <p>
                         It is a long established fact that create category leading brand experiences a reader
                         will be distracted by the readable content of a page when looking at its layout.
                    </p>
                </div>
            </div>
            <div className='row mt-5 '>
                <div className='col-lg-4 col-md-12 animation'>
                    <div className='card-title'>
                        <img src={User1}/>
                        <p>
                            I feel confident imposing change on myself. It's a lot more fun progressing than looking back.
                            That's why scelerisque pretium dolor, sit amet vehicula erat pelleque need throw curve balls.
                        </p>
                    </div>
                    <div className='card-name'>
                            <h5>RUBEN REED -</h5>
                            <span> Charleston</span>
                    </div>
                </div>
                <div className='col-lg-4 col-md-12 animation'>
                    <div className='card-title'>
                        <img src={User2}/>
                        <p>
                            I feel confident imposing change on myself. It's a lot more fun progressing than looking back.
                            That's why scelerisque pretium dolor, sit amet vehicula erat pelleque need throw curve balls.
                        </p>
                    </div>
                    <div className='card-name'>
                            <h5>MICHAEL P. HOWLETT -</h5>
                            <span> Worcester</span>
                    </div>
                </div>
                <div className='col-lg-4 col-md-12 animation'>
                    <div className='card-title'>
                        <img src={User3}/>
                        <p>
                            I feel confident imposing change on myself. It's a lot more fun progressing than looking back.
                            That's why scelerisque pretium dolor, sit amet vehicula erat pelleque need throw curve balls.
                        </p>
                    </div>
                    <div className='card-name'>
                            <h5>THERESA D. SINCLAIR -</h5>
                            <span> Lynchburg</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Testemonial;
