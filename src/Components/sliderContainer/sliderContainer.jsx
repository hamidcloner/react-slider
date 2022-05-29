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

    let [slideNum,setSlideNum] = useState(0);
    const clickOnButton = (arrow) => {

        let arrayLength = slideData.length;
        const slideNumber = () => {
            if(arrow == "next" && slideNum < arrayLength-1){
                return slideNum + 1;
            } else if(arrow == "next" && slideNum == arrayLength-1){
                return slideNum = 0;
            }
            if(arrow == "previous" && slideNum > 0){
                return slideNum - 1;
            }else if(arrow == "previous" && slideNum == 0){
                return slideNum = arrayLength-1;
            };
        }
        setSlideNum(slideNumber);
    }
    return (
        <SliderWrapper>
            <Slider />
            <ChangeSlideButton whichArrow="next" clickOnButton={clickOnButton}/>
            <ChangeSlideButton whichArrow="previous" clickOnButton={clickOnButton}/> 
            <SliderFalgContainer>
                {slideData && slideData.map((slide) => (
                    <SliderFlag 
                            key={slide.id} 
                            color={slide.flagColor} 
                            slideID={slide.id} 
                            currentSlideID={slideNum}
                            />
                ))}
            </SliderFalgContainer>
        </SliderWrapper>

    )
};

export default SliderContainer;