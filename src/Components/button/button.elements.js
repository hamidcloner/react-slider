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
            case "next":
                return `right : .5rem;`;
            case "previous":
                return `left : .5rem;`;
        }
    }};

    &::after {
        content : "";
        display : block;
        position : absolute;
        width : 2rem;
        height : .1rem;
        background-color : gray;
        ${({whichArrow}) => {
            if(whichArrow == "next"){
                return `
                    transform : rotate(-45deg);
                    right : 1.5rem;
                    bottom : 1.6rem;
                    `;
            }
            else if(whichArrow == "previous"){
                return `
                    transform : rotate(45deg);
                    right : 1.5rem;
                    bottom : 1.6rem;
                `
            }
        }}
    };

    &::before {
        content : "";
        display : block;
        position : absolute;
        width : 2rem;
        height : .1rem;
        background-color : gray;

        ${({whichArrow}) => {
            if(whichArrow == "next"){
                return `
                    transform : rotate(45deg);
                    top : 1.8rem;
                    right : 1.5rem;
                    `;
            }
            else if(whichArrow == "previous"){
                return `
                    transform : rotate(-45deg);
                    top : 1.8rem;
                    right : 1.5rem;
                `;
            }
        }}
    };

    
`;