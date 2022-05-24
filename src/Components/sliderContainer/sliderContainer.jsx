import React from 'react';
import {
    SliderWrapper,
} from './sliderContainer.elements';
import Slider from '../slide/slide';
import ChangeSlideButton from '../button/button';


const SliderContainer = () => {
    return (
        <SliderWrapper>
            <Slider />
            <ChangeSlideButton whichArrow="next" />
            <ChangeSlideButton whichArrow="previous" /> 
        </SliderWrapper>

    )
};

export default SliderContainer;