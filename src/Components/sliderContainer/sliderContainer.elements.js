import styled from 'styled-components';
import breakPoints,{sizes} from '../../breakPoints';
import { Container } from '../../GlobalStyles';


export const SliderWrapper = styled(Container)`
    margin-top : 2rem;
    height : 30rem;
    font-size : 2rem;
    position : relative;
`;

export const SliderFalgContainer = styled.div`
    display : flex;
    width : auto;
    height : auto;
    padding : .5rem;
    position : absolute;
    bottom : 1rem;
    left : 45%;
   
`;


