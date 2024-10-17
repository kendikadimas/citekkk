import { Container } from 'postcss'
import React from 'react'
import Section from './Section'
import doctorImage from '../assets/doctor.png'

const About = () => {
    return (
    <div>
        <Section
        image = {doctorImage}
        judul="About Us"
        title="Foodwise"
        description="Meningkatkan kesadaran masyarakat Indonesia terhadap isu food waste dan membantu mengubah perilaku konsumsi makanan yang berlebihan.
FoodWise hadir dengan solusi yang menggabungkan teknologi dan pendekatan edukatif untuk mengurangi dampak buruk dari food waste terhadap lingkungan dan perekonomian."

        />
    </div>
    )
}

export default About