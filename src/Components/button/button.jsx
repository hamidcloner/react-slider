
import { ButtonContainer } from "./button.elements";


 
const ChangeSlideButton = ({whichArrow,clickOnButton}) => {
    return (
     
            <ButtonContainer 
                whichArrow={whichArrow}
                onClick={() => clickOnButton(whichArrow)}
                >

            </ButtonContainer>
      

    
    )
}

export default ChangeSlideButton;   