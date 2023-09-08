import React from 'react';

import './Home.css'
import Hero from '@/Components/Hero/Hero';
import Features from '@/Components/Features/Features';

const Home = () => {
    return (
        <section className='homesection'>
            <Hero />
            <Features />
        </section>
    );
};

export default Home;