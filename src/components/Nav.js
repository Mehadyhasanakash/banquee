import React from 'react';
import './nav.css'

const Nav = () => {
    return (
        <>
        <section className='nave-container'>
        <div className="left">
            <p className='logo'>Banquee.</p>

        </div>

        <div className="center">
            <ul>
                <li>Features</li>
                <li>Compare</li>
                <li>Support</li>
                <li>Blog</li>
            </ul>

        </div>

        <div className="right">
            <h4 className='login'>Login</h4>
            <button>Open Account</button>

        </div>
        </section>
            
        </>
    );
};

export default Nav;