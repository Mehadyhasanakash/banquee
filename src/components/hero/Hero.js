import { CheckCircle, TrendingFlatSharp, Wifi } from '@mui/icons-material';
import React from 'react';
import './hero.css'

const Hero = () => {
    return (
        <section className='hero-container'>

            <div className='hero'>
            <div className="hero-lift">
                        <h1 className='hero-title'>Banking <br/> starts her.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, culpa quo voluptatibus non quaerat animi?</p>


                       <div className='item'>
                       <CheckCircle/> <samp className='item-text'>Instant Transfer</samp>
                       <div className='item-right'>
                       <CheckCircle/> <samp className='item-text'>Payments worldwide</samp>
                       </div>
                       </div>

                       <div className='item-seconed'>
                       <CheckCircle/> <samp className='item-text'>Saving account</samp>
                       <div className='item-right'>
                       <CheckCircle className='icon-right'/> <samp className='item-text'>100% mobile banking</samp>
                       </div>
                       </div>

                       <div className='copare-crd'>
                       <button className='open-button'>Open Account</button>
                       <p className='p'>Compare Cards </p> <TrendingFlatSharp className='icon'/>
                       </div>
                       
                     
                       
                       
            </div>

            <div className="hero-right">
                <div className='card-containers'>

                    <div className="card-logo">
                        <h1>banquee.</h1> <Wifi/>
                        
                    
                    </div>

                    <div className='card-number'>
                            <h1>1234</h1>
                            <h1>5678</h1>
                            <h1>900</h1>
                            <h1>0000</h1>

                        </div>

                        <div className='card-customer-title'>
                        <div className="card-title">
                            <div className='johen-deo'>
                            <h5>John Doe</h5>
                            <h3>JCard Holder</h3>
                            </div>

                            <div className='expir-date'>
                            <h5>Expiry Date</h5>
                            <h3>09/28</h3>
                        </div>
                        </div>

                        <div>
                            <h1>VISA</h1>
                        </div>

                        
                        </div>

                </div>



                <div className='card-container'>

                    <div className="card-logo">
                        <h1>banquee.</h1> <Wifi/>
                        
                    
                    </div>

                    <div className='card-number'>
                            <h1>1234</h1>
                            <h1>5678</h1>
                            <h1>900</h1>
                            <h1>0000</h1>

                        </div>

                        <div className='card-customer-title'>
                        <div className="card-title">
                            <div className='johen-deo'>
                            <h5>John Doe</h5>
                            <h3>JCard Holder</h3>
                            </div>

                            <div className='expir-date'>
                            <h5>Expiry Date</h5>
                            <h3>09/28</h3>
                        </div>
                        </div>

                        <div>
                            <h1>VISA</h1>
                        </div>

                        
                        </div>

                </div>
                
                
            </div>
            </div>
            
        </section>
    );
};

export default Hero;