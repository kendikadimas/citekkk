import React from 'react'

const Meal = ({title, calorie}) => {
    return (
        <div className='flex '>
            <div className='bg-teal-400 rounded-xl'>
                <h1>{title}</h1>
            </div>
            <div>
                <h1>{calorie}</h1>
            </div>
        </div>
    )
}

export default Meal