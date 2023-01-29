import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { motion } from "framer-motion";
const TabBorder = styled.div`
  width: 700px;
  height: 80px;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  background: ${(props) =>
    props.activate
      ? "rgba(139, 161, 190, 0.2)"
      : "radial-gradient(100% 1891.92% at 18.26% 0%,#e6007a 0%,#6745d2 100%)"};
  /* background: radial-gradient(100% 1891.92% at 18.26% 0%,#e6007a 0%,#6745d2 100%); */
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TabBg = styled.div`
  width: 696px;
  height: 77px;
  border-radius: 25px;

  background: linear-gradient(
    118deg,
    hsl(329.88, 100%, 51.96%) 0%,
    hsl(329.88, 92.45%, 42.25%) 0.1%,
    hsl(329.88, 92.45%, 33.82%) 0.5%,
    hsl(329.88, 92.45%, 26.6%) 1.4%,
    hsl(329.88, 92.45%, 20.49%) 2.8%,
    hsl(329.88, 92.45%, 15.4%) 5%,
    hsl(329.88, 92.45%, 11.22%) 8.1%,
    hsl(329.88, 92.45%, 7.88%) 12.3%,
    hsl(329.88, 92.45%, 5.28%) 17.6%,
    hsl(329.88, 92.45%, 3.33%) 24.2%,
    hsl(329.88, 92.45%, 1.92%) 32.3%,
    hsl(329.88, 92.45%, 0.99%) 42%,
    hsl(329.88, 92.45%, 0.42%) 53.5%,
    hsl(329.88, 92.45%, 0.12%) 66.9%,
    hsl(329.88, 92.45%, 0.02%) 82.3%,
    hsl(0, 0%, 0%) 100%
  );
`;
const TabWrapper = styled.div`
  display: flex;
  position: relative;
`;
const SearchTab = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 296px;
  padding-right: 10px;
`;
const SingleTab = styled.div`
  font-size: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* align-items: center; */
  width: ${(props) => (props.indicator ? "196px" : "200px")};
  padding-left: 25px;
  height: 77px;
`;
const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: rgba(139, 161, 190, 0.2);
  border-radius: 20px;
`;
const TabLine = styled.div`
  background-color: rgba(139, 161, 190, 0.05);
  width: 3px;
  height: 77px;
`;
const SubText = styled.div`
  font-size: 18px;
  color: gray;
`;
const IndicatorBorder = styled.div`
  width: 200px;
  height: 80px;
  background: radial-gradient(
    100% 1891.92% at 18.26% 0%,
    #e6007a 0%,
    #6745d2 100%
  );
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  /* left:${(props) => props.pos}; */
  /* transition: all 400ms linear; */
`;
const IndicatorBg = styled.div`
  width: 196px;
  height: 77px;
  border-radius: 25px;
  background: black;
`;
export const Tabs = () => {
  const [activate, setActivate] = useState(true);
  const [tabOpen, setTabOpen] = useState("0");
  const tabs = [
    {
      id: 1,
      content: (
        <SingleTab indicator>
          <SubText>Any Token</SubText>
          <p>Choose token</p>
        </SingleTab>
      ),
    },
    {
      id: 2,
      content: (
        <SingleTab indicator>
          <SubText>Any chain</SubText>
          <p>Choose chain</p>
        </SingleTab>
      ),
    },
  ];
  const handleTabs = (val) => {
    setTabOpen(val);
  };
  return (
    <TabBorder activate={activate}>
      <TabBg>
        <TabWrapper>
          <SingleTab onClick={() => handleTabs("0%")}>
            {activate ? <SubText>Any Token</SubText> : ""}
            <p>{activate ? "Choose token" : "Any token"}</p>
          </SingleTab>
          <IndicatorBorder
            as={motion.div}
            animate={{ x: tabOpen }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <IndicatorBg>{tabs[0].content}</IndicatorBg>
            </div>
          </IndicatorBorder>

          <TabLine></TabLine>
          <SingleTab onClick={() => handleTabs("200px")}>
            {activate ? <SubText>Any Chain</SubText> : ""}
            <p>{activate ? "Choose chain" : "Any chain"}</p>
          </SingleTab>
          <TabLine></TabLine>
          <SearchTab onClick={() => handleTabs("400px")}>
            <SingleTab>
              {activate ? <SubText>Any amount</SubText> : ""}
              <p>{activate ? "Filter by amount" : "Any amount"}</p>
            </SingleTab>
            <SearchIcon>
              <FiSearch />
            </SearchIcon>
          </SearchTab>
        </TabWrapper>
      </TabBg>
    </TabBorder>
  );
};
