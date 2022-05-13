import styled from "styled-components";

export const ButtonContainer = styled.div`
    width : 5rem;
    height : 5rem;
    position : absolute;
    border : .1rem solid gray;
    border-radius : 50%;
    top : 12.5rem;

    ${({whichArrow}) => {
        switch(whichArrow){
            case "forward":
                return `right : .5rem;`;
            case "back":
                return `left : .5rem;`;
        }
    }}
`;