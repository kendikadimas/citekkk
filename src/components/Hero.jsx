import React from 'react'
import Doctor from '../assets/doctor2.png'

const Hero = () => {
    return (
        <section className='flex min-w-screen'>
            <div className='w-3/4 m-auto h-auto ml-28'>
                <p className='font-light'>Mari, untuk hidup sehat</p>
                <h1 className='text-7xl font-semibold'>
                <span className='text-teal-500'>Solusi Hidup Sehat</span><br/> Dengan Makanan <br/> Sehat & Bergizi
                </h1>
                <p className='text-lg'>Pengukuran index kalori untuk<br/> <b>merekomendasikan makanan</b> yang tepat!</p>
            </div>
        
            <div className=' items-center w-3/4 m-auto mr-16 pr-20'>
                <img src={Doctor} alt='dokter' className='' />
            </div>
        </section>
        );
        
};

export default Hero;