import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';



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

`;


export default GlobalStyle;