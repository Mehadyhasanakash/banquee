import React from 'react';
import Hero from '../components/hero/Hero';
import Nav from '../components/Nav';
import OneApp from '../components/oneApp/OneApp';

const Home = () => {
    return (
        <div>
            <Nav/>
            <Hero/>
            <OneApp/>
        </div>
    );
};

export default Home;