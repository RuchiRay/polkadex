import bg from "./bg.png";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { Tabs } from "./components/Tabs";
import { useState } from "react";
const Wrapper = styled.section`
  background: url(${bg}) no-repeat center 115% / cover;
  height: 99.5vh;
  width: 100%;
  min-height: 666px;
  display: flex;
  padding: 40px;
  font-size: 2rem;
  position: relative;
  flex-direction: column;
  align-items: center;
`;
const Text = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
`;
const PinkDot = styled(Text)`
  color: #e6007a;
`;
const Headline = styled.div`
  text-align: center;
  position: absolute;
  top: 30%;
  font-size: 50px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* transform: translateY(50%); */
`;
const SubText = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  width: 500px;
  margin-top: 10px;
`;
function App() {
  const [changeBg, setChangeBg] = useState(false)
  const [activate, setActivate] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Wrapper changeBg>
        <div>
          <Text>Challenge</Text>
          <PinkDot>.</PinkDot>
        </div>

        <Headline>
          <p>What are you capable of?</p>
          <SubText>
            Do not underestimate yourselves. You are more capable than what you
            think your are capable of.
          </SubText>
        </Headline>
        <Tabs activate={activate} setActivate={setActivate} />
      </Wrapper>
    </>
  );
}

export default App;
