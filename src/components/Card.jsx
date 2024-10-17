import React from 'react'

const Card = ({image, title, description}) => {
    return (
    <div className='text-left items-center w-1/2 p-2 mt-6'>
        <img src={image} className='h-1/2 m-auto p-4 w-auto'/>
        <h3 className='font-bold'>{title}</h3>
        <p className=''>{description}</p>
    </div>   
    );              
    };

export default Card;