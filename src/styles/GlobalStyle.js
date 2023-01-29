import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
 
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  *{
    margin: 0;
    padding: 0;
  }
  .bg-1{
    height: 99.5vh;
     width: 100%;
     min-height: 500px;
     object-fit: cover;
 }
 
`;

export default GlobalStyle;
