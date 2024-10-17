import React from 'react'

const Food = ({image, food, detail}) => {
  return (
    <div>
        <div className=''>
            <div>
                <img src='{image}' />
                <h2>{food}</h2>
                <p>{detail}</p>
            </div>
        </div>
    </div>
  )
}

export default Food