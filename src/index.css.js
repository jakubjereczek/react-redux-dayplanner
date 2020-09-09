import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
  body {
    height: 100vh;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  * {
    text-decoration: none;
  }

  a {
    width: 100%;
  }
`;

export default GlobalStyle;