import React from 'react'
import Section from '../components/Section'
import WasteImage from '../assets/waste.png'
import Pickup from '../components/Pickup'
import Plot from '../components/Plot'
import Button from '../components/Button'

const Waste = () => {
  return (
    <div>
        <Section 
            image={WasteImage}
            judul="let's get acquainted"
            title="Waste Wise"
            description="Angkut Sampahmu demi lingkungan yang tercinta kita tetap terjaga! Dengan fitur ini, kami berharap dapat membantu masyarakat lebih mudah dalam mengelola sampah, sehingga lingkungan tercinta tetap terjaga dan bebas dari pencemaran. Bersama FoodWise, mari wujudkan Indonesia yang lebih bersih dan sehat!"
        />
        <Pickup />
        <Plot />
        <Button/>
    </div>
  )
}

export default Waste