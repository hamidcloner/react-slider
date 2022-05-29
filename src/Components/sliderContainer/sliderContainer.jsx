import React,{useState} from 'react';
import {
    SliderWrapper,
    SliderFalgContainer
} from './sliderContainer.elements';
import slideData from '../slide/slideData';
// ==== import the local Components =====
import Slider from '../slide/slide';
import ChangeSlideButton from '../button/button';
import SliderFlag from '../sliderFlag/SliderFlag';



const SliderContainer = () => {

    const [slideNum,setSlideNum] = useState(0);
    const clickOnButton = () => {
        setSlideNum(slideNum + 1);
        console.log('out of render : ',slideNum);
    }
    return (
        <SliderWrapper>
            <Slider />
            <ChangeSlideButton whichArrow="next" clickOnButton={clickOnButton}/>
            <ChangeSlideButton whichArrow="previous" clickOnButton={clickOnButton}/> 
            <SliderFalgContainer>
                {console.log('in render : ',slideNum)}
                {slideData && slideData.map((slide) => (
                    <SliderFlag color={slide.flagColor}/>
                ))}
            </SliderFalgContainer>
        </SliderWrapper>

    )
};

export default SliderContainer;