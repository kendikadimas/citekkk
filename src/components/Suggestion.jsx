import React from 'react'
import Meal from './Meal'
import Food from './Food'
import FoodDetail from './FoodDetail'

const Suggestion = () => {
  return (
    <section>
        <div>
            <Meal 
            title='SARAPAN'
            calorie='245 Calorie'/>
            <Meal 
            title=''
            calorie='245 Calorie'/>
            <Meal 
            title='SARAPAN'
            calorie='245 Calorie'/>
        </div>
        <div>
            <Food />
        </div>
        <div>
            <FoodDetail />
        </div>
        
    </section>
  )
}

export default Suggestion