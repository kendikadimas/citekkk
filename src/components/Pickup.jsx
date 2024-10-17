import React from 'react'
import row from '../assets/row.png'
import row2 from '../assets/row2.png'

const Pickup = () => {
    return (
    <section>
        <h2 className='text-teal-400 font-bold text-3xl text-center p-5'>PICKUP FOOD WASTE SERVICES</h2>
        <div className='p-32'>
        <img src={row} alt='row.png' className='w-full'/>
        <img src={row2} alt='row2.png' className='w-full'/>
        </div>
    </section>
    )
}

export default Pickup