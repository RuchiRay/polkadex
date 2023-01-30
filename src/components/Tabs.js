import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { useState ,useRef} from "react";
import { motion } from "framer-motion";
const TabBorder = styled.div`
  height: 80px;
  position: absolute;
  z-index: 3;
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
  /* width: 296px; */
  width: 100%;
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
  flex-shrink: 0;
`;
const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: ${(props) =>
    props.bg ? "#e6007a" : "rgba(139, 161, 190, 0.2)"};
  border-radius: 20px;
  cursor: pointer;
`;
const SearchText = styled.p`
  font-size: 18px;
  margin-left: 10px;
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
  width: ${(props) => (props.search ? "49%" : "200px")};
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
`;
const IndicatorBg = styled.div`
  width: ${(props) => (props.search ? "99%" : "196px")};
  height: 77px;
  border-radius: 25px;
  background: black;
`;
export const Tabs = ({ activate, setActivate,setActiveModalId ,refTab,setLeft}) => {
  const [tabOpen, setTabOpen] = useState("0");
  const [tabId, setTabId] = useState(1);
  const searchIconHandle = ()=>{
    console.log('click');
    setActivate(false)
  }
  const tabs = [
    {
      id: 0,
      content: (
        <SingleTab indicator>
          <SubText>Any Token</SubText>
          <p>Choose token</p>
        </SingleTab>
      ),
    },
    {
      id: 1,
      content: (
        <SingleTab indicator>
          <SubText>Any chain</SubText>
          <p>Choose chain</p>
        </SingleTab>
      ),
    },
    {
      id: 2,
      content: (
        <motion.div initial={{ opacity: 0 }} animate={{opacity:1}} transition={{ delay: 0.1 }}>
          <SearchTab search>
            <SingleTab>
              <SubText>Any amount</SubText>
              <p>Filter by amount</p>
            </SingleTab>
            <SearchIcon
              bg={activate ? "true" : null}
              as={motion.div}
              animate={{ width: activate ? "140px" : "60px" }}
              onClick={searchIconHandle}
            >
              <FiSearch />
              <SearchText>{activate ? "Search" : ""}</SearchText>
            </SearchIcon>
          </SearchTab>
        </motion.div>
      ),
    },
  ];
  const handleTabs = (val, id,modalVal) => {
    console.log(id);
    if (!activate) setActivate(true);
    setTabOpen(val);
    setTabId(id);
    setActiveModalId(id)
    if(modalVal)
    setLeft(modalVal)
    else
    setLeft(val)
  };
  console.log(activate);
  
  return (
    <TabBorder
      as={motion.div}
      animate={{ width: activate ? "785px" : "700px" }}
      transition={{ duration: 0.3 }}
      activate={activate ? "true" : null}
      ref={refTab}
    >
      <TabBg
        as={motion.div}
        animate={{ width: activate ? "780px" : "696px" }}
        transition={{ duration: 0.3 }}
      >
        <TabWrapper>
          <SingleTab onClick={() => handleTabs("0%", 0)}>
            {activate ? <SubText>Any Token</SubText> : ""}
            <p>{activate ? "Choose token" : "Any token"}</p>
          </SingleTab>

          <IndicatorBorder
            as={motion.div}
            animate={{ x: tabOpen, display: activate ? "flex" : "none" }}
            transition={{ duration: 0.3 }}
            search={tabId === 2 ? "true" : null}
            // display={activate?'flex':'none'}
          >
            <IndicatorBg
              className="ind-bg"
              search={tabId === 2 ? "true" : null}
            >
              {tabs[tabId].content}
            </IndicatorBg>
          </IndicatorBorder>

          <TabLine></TabLine>
          <SingleTab onClick={() => handleTabs("200px", 1,'150px')}>
            {activate ? <SubText>Any Chain</SubText> : ""}
            <p>{activate ? "Choose chain" : "Any chain"}</p>
          </SingleTab>
          <TabLine></TabLine>

          <SearchTab onClick={() => handleTabs("400px", 2,'450px')}>
            <SingleTab>
              {activate ? <SubText>Any amount</SubText> : ""}
              <p>{activate ? "Filter by amount" : "Any amount"}</p>
            </SingleTab>
            <SearchIcon
              bg={activate ? "true" : null}
              as={motion.div}
              animate={{ width: activate ? "140px" : "60px" }}
             
            >
              <FiSearch />
              <SearchText>{activate ? "Search" : ""}</SearchText>
            </SearchIcon>
          </SearchTab>
        </TabWrapper>
      </TabBg>
    </TabBorder>
  );
};
