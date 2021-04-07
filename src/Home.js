import React from 'react'
import './css/Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <div className="home__row">
                     <Product/>
                 </div>
            </div>
        </div>
    );
};

export default Home
