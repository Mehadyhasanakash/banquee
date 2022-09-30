import React from 'react';
import './nav.css'

const Nav = () => {
    return (
        <>
        <section className='nave-container'>
        <div className="left">
            <h1>Banquee.</h1>

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
            <h4>Login</h4>
            <button>Open Account</button>

        </div>
        </section>
            
        </>
    );
};

export default Nav;