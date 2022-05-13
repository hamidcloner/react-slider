import ChangeSlideButton from '../button/button';
import {
    SlideContainer,
} from './slider.elements';


const Slider = () => {

    return (
        <SlideContainer>
            <ChangeSlideButton whichArrow="forward"/>
            <ChangeSlideButton whichArrow="back" />
        </SlideContainer>
    )

}

export default Slider;