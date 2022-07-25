import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    width: 100vw;
    height: 100vh;
  }
  body {
    background-color: white;
    margin: 0;
  }
  #root {
    width: 100vw;
    height: 100vh;
  }
`;

export default GlobalStyle

