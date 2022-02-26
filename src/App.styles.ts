import styled, { createGlobalStyle } from 'styled-components';

// @ts-ignore
import bgImage from './images/quizzpng.png';

export const GlobalStyle = createGlobalStyle `

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
        align-content: center;
        align-items: center;

        color: white;
    }

    * {

        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`;

export const Wrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    > p {

        color:#fff;
    }

    .score {

        color: #fff;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        background-image: linear-gradient(180deg, #fff, #87F1FF);
        background-size: 100%;
        background-clip: text;

        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        --moz-background-clip: text;
        --moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085A3);
        font-size: 70px;
        text-align: center;
        margin: 2àpx;
    }

    .start, .next {

        cursor: pointer;
        background: linear-gradient(180deg, #fff, #FFCC91);
        border: 2px solid #D38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }

    .start {

        max-width: 200px;
    }
`