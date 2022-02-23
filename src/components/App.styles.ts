import styled, { createGlobalStyle } from 'styled-components';
import bgImage from '../images/quizzpng.png';

export const GlobalStyle = createGlobalStyle`

    html {
        height: 100%;
    }

    body {
        background-image: url(${bgImage});
        background-size: cover;

        margin: 0;
        padding: 0 20px;

        display: flex;
        justify-content: center;
       /*  align-content: center;
        align-items: center; */

        color: white;
    }

    * {

        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`