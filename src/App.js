import bg from "./bg.png";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
const Wrapper = styled.section`
  background: url(${bg}) no-repeat center 100%/cover;
  height: 99.5vh;
  width: 100%;
  min-height: 600px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:2rem;
  
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>hello</Wrapper>
    </>
  );
}

export default App;
