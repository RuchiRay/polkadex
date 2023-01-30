import bg from "./bg.png";
import bg1 from "./bg1.jpg";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { Tabs } from "./components/Tabs";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Modal } from "./components/Modal";
// import ClickAwayListener from "react-click-away-listener";
import { ClickAwayListener } from "@mui/base";
const Wrapper = styled.section`
  background: ${(props) =>
    props.changeBg
      ? `url(${bg1}) no-repeat center 115% / cover`
      : `url(${bg}) no-repeat center 115% / cover`};
  /* background: url(${bg}) no-repeat center 115% / cover; */
  height: 99.5vh;
  width: 100%;
  min-height: 700px;
  display: flex;
  padding: 40px;
  font-size: 2rem;
  position: relative;
  flex-direction: column;
  align-items: center;
`;
const AbsoluteWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
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
  font-size: 50px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  /* transform: translateY(50%); */
`;
const SubText = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  width: 500px;
  margin-top: 10px;
`;
const Absolute = styled.div`
  position: absolute;
  top: 58%;
`
function App() {
  const [activate, setActivate] = useState(false);
  const [activeModalId, setActiveModalId] = useState(0);
  const refContainer = useRef();
  const refTab = useRef();
  const [left, setLeft] = useState("0%");
  const handleClickAway = () => {
    console.log("Maybe close the popup");
    setActivate(false);
  };
  return (
    <>
      <GlobalStyle />
      <Wrapper ref={refContainer} changeBg={activate ? "true" : null}>
        <div>
          <Text>Challenge</Text>
          <PinkDot>.</PinkDot>
        </div>
        {activate ? <AbsoluteWrapper></AbsoluteWrapper> : ""}
        <Headline
          as={motion.div}
          animate={{ top: activate ? "20%" : "30%" }}
          transition={{ duration: 0.3 }}
        >
          <p>What are you capable of?</p>
          <SubText>
            Do not underestimate yourselves. You are more capable than what you
            think your are capable of.
          </SubText>
        </Headline>
        <ClickAwayListener onClickAway={handleClickAway}>
          <Absolute>
            <Tabs
              activeModalId={activeModalId}
              setActiveModalId={setActiveModalId}
              activate={activate}
              setActivate={setActivate}
              refTab={refTab}
              setLeft={setLeft}
            />
            <Modal
              activeModalId={activeModalId}
              setActiveModalId={setActiveModalId}
              activate={activate}
              refContainer={refContainer}
              refTab={refTab}
              left={left}
            />
          </Absolute>
        </ClickAwayListener>
      </Wrapper>
    </>
  );
}

export default App;
