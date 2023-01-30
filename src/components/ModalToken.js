import React, { useState } from "react";
import styled from "styled-components";
import ada from "../images/ADA.png";
import eth from "../images/ETh.png";
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const TokenWrapper = styled.div`
  width: 160px;
  height: 198px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px;
  border-width: 2px ;
  border-style: solid;
  border-color: ${(props)=>props.border};
  cursor: pointer;
`;
const TokenImage = styled(TokenWrapper)`
  width: 54px;
  height: 54px;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin-bottom: 40px;
`;
const BlackText = styled.p`
  color: #333333;
  font-size: 20px;
`;
const Flex = styled.div`
  display: flex;
 justify-content: space-between;
  margin-top: 15px;
`;
const SubText = styled.p`
  color: gray;
  font-size: 25px;
  margin-top: 5px;
`;
export const ModalToken = () => {
  const [tokenSelected, setTokenSelected] = useState(0);
  const tokens = [
    {
      id: 0,
      name: "Etherium",
      label: "ETH",
      img: eth,
    },
    {
      id: 1,
      name: "Cardano",
      label: "ADA",
      img: ada,
    },
  ];
  return (
    <Wrapper>
      <BlackText>Choose token</BlackText>
      <Flex>
        {tokens.map((item) => {
          return (
            <TokenWrapper
              border={item.id === tokenSelected ? "#1C1C26" : "#828282"}
              onClick={() => setTokenSelected(item.id)}
              key={item.id}
            >
              <TokenImage>
                <img src={item.img} alt="" />
              </TokenImage>
              <BlackText>{item.name}</BlackText>
              <SubText>{item.label}</SubText>
            </TokenWrapper>
          );
        })}
      </Flex>
    </Wrapper>
  );
};
