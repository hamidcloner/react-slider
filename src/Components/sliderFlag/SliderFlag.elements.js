


import styled from 'styled-components';



export const FlagContainer = styled.div`
    width : 1.2rem;
    height : 1.2rem;
    border : 1px solid gray;
    border-radius : 50%;
    margin : 0 .2rem;
    background-color : ${({bgColor,slideID,currentSlideID}) => slideID === currentSlideID ? bgColor : 'transparent'};
`;