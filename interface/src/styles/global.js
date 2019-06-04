import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0
  };
  html, body, #root {
    height: 100%
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #736D94;
    font-family: 'Montserrat', sans-serif;

    background: linear-gradient(to bottom, #251F47 0%, #736D94 100%), transparent;
    background-size: 100% 100%, 100%;
    background-repeat: no-repeat;
    background-position: top;
    padding: 0 20px;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
