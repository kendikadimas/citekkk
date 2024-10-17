import React from 'react'

const FoodDetail = ({headline, description}) => {
  return (
    <div>
        <div>
            <h2>{headline}</h2>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default FoodDetail