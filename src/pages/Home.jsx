import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Restaurant from '../components/Restaurant';

const Home = () => {
    return (
    <div>
    <Navbar />
    <Hero />
    <Services />
    <About />
    <Restaurant />
    </div>
    )
}

export default Home