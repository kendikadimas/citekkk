import React from 'react'
import Fedwell from '../assets/Fedwell.png'
import Burgreens from '../assets/Burgreens.png'
import Saladstop from '../assets/Saladstop.png'

const Restaurant = () => {
    return (
        <section>
        <h2 className='text-3xl text-teal-400 font-semibold text-center p-5'>Restaurant Recomendation</h2>

    <div className='flex'>
        <div className=''>
        <img src={Fedwell} alt='Fedwell.png' />
        <h2>Fed Well Restaurant</h2>
        </div>
        <div >
        <img src={Burgreens} alt='Burgreens.png'/>
        <h2>Burgreens Restaurant</h2>
        </div>
        <div>
        <img src={Saladstop} alt='Saladstop.png' />
        <h2>Saladstop Restaurant</h2>
        </div>
    </div>
    </section>
    );
};

export default Restaurant;