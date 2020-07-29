import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  html {
    height: 100%;

    @media(min-width: 1000px){
      height: 100vh;
      width: 100vw;
      overflow: hidden;
    }
  }

  body, #root {
   height: 100%;
   width: 100%;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Mulish', sans-serif;
  }

`;