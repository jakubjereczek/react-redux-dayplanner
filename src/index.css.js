import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
  body {
    height: 100vh;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  * {
    text-decoration: none;
  }

  a {
    color: inherit;
  }

  button > a {
    width: 100%;
    text-decoration: none;
    color: #fff;
  }
`;

export default GlobalStyle;