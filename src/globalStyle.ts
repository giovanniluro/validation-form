import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  html {
    
    height: 800px;
    width: 100%;

    @media(min-width: 1000px) and (min-height: 801px){
      overflow: hidden;
      height: 100%;
      width: 100%;
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

  button {
    cursor: pointer;
  }

`;