import React from 'react'
import Slider from '@farbenmeer/react-spring-slider';

const MySlider = ({ children, auto, hasBullets }) => (
    <Slider
        auto={auto}
        hasBullets={hasBullets}
    >
        {children}
    </Slider>
)

export default MySlider
