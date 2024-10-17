import React from 'react'
import Card from './Card';
import service1 from '../assets/service1.png'
import service2 from '../assets/service2.png'
import service3 from '../assets/service3.png'
import service4 from '../assets/service4.png'

const Services = () => {
    return (
        <section className=''>
            <h2 className='text-center text-3xl font-semibold text-teal-400 p-8'>THE SERVICE WE'RE PROVIDE</h2>
            <div className='flex p-5'>
            <Card 
            image = {service1}
            title= "Calculating your Index Calorie"
            description="We Calculate your BMI Index from data like age, height and weight"
            />
            <Card 
            image= {service2}
            title = "Calories Counter"
            description="We provide food recomendation according to your calorie requirements"
            />
            <Card 
            image= {service3}
            title="Foodwise Program"
            description="Solve your queries by interacting with our bot"
            />
            <Card 
            image= {service4}
            title="Waste Pickup"
            description="Get all the nutritional values of your preferred dish"
            />
            </div>
        </section>
    );
    };

    export default Services;