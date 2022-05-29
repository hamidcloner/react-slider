import {
    FlagContainer,
} from './SliderFlag.elements';

const SliderFlag = ({color,slideID,currentSlideID}) => {
    return (
        <FlagContainer bgColor={color} slideID={slideID} currentSlideID={currentSlideID}></FlagContainer>
    )
}


export default SliderFlag;