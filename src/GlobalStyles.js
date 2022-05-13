import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';
import breakPoints,{sizes} from "./breakPoints";



const GlobalStyle = createGlobalStyle`
    *,*::after,*::before {
        padding : 0;
        margin : 0;
        box-sizing : border-box;
    };
    ul,ol {
        margin : 0;
    };
    li {
        list-style : none;
    };
    a {
        text-decoration : none;
    }
    html {
        font-size : 10px;
    }
`;


export const Container = styled.div`
    margin-right : auto;
    margin-left : auto;
    max-width : 1200px;
    border : 1px solid black;

    @media only screen and ${breakPoints.xs_devices}{
        width : 100%;
    };
    @media only screen and ${breakPoints.sm_devises}{
        max-width : ${sizes.sm};
    };
    @media only screen and ${breakPoints.md_devices}{
        max-width : ${sizes.md};
    };
    @media only screen and ${breakPoints.lg_devices}{
        max-width : ${sizes.lg};
    }; 

`;


export default GlobalStyle;