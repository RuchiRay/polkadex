import { createGlobalStyle } from "styled-components/macro";
import variables from "./variable";
import normal from "./fonts/CircularStd-Book.otf";
import medium from "./fonts/CircularStd-Medium.otf";
import bold from "./fonts/CircularStd-Bold.otf";
const GlobalStyle = createGlobalStyle`
${variables}
@font-face {
  font-family: 'Circular Std';
  src: url(${normal}) format('opentype');
  font-weight: 400;
}
@font-face {
  font-family: 'Circular Std';
  src: url(${medium}) format('opentype');
  font-weight: 500;
}
@font-face {
  font-family: 'Circular Std';
  src: url(${bold}) format('opentype');
  font-weight: 700;
}
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
  body{
    color:var(--white);
    font-family: 'Circular Std';
    background-color: #121316;
  }
  .bg-1{
    height: 99.5vh;
     width: 100%;
     min-height: 500px;
     object-fit: cover;
 }
 
`;

export default GlobalStyle;
