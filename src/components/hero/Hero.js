import { CheckCircle, TrendingFlatSharp } from '@mui/icons-material';
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
                       <CheckCircle/> <samp className='item-text'>Saving accounts</samp>
                       <div className='item-right'>
                       <CheckCircle/> <samp className='item-text'>100% mobile banking</samp>
                       </div>
                       </div>

                       <div className='copare-crd'>
                       <button className='open-button'>Open Account</button>
                       <p className='p'>Compare Cards </p> <TrendingFlatSharp className='icon'/>
                       </div>
                       
                     
                       
                       
            </div>

            <div className="hero-right">
                <h1>lormkfsdfs</h1>
                
            </div>
            </div>
            
        </section>
    );
};

export default Hero;