import React, { useState } from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const BlackText = styled.p`
  color: #333333;
  font-size: 20px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;
const ChainWrapper = styled.div`
  width: 100%;
  height: 69px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => props.border};
  cursor: pointer;
  margin-top: 24px;
  padding: 10px 15px;
`;
const PinkDot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: ${(props) => props.bg};
  margin-right: 7px;
`;
const Select = styled.div`
  width: 85px;
  height: 48px;
  border-radius: 12px;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalChain = () => {
  const [chainSelected, setChainSelected] = useState(0);
  const chains = [
    {
      id: 0,
      name: "Ethereum Mainnet",
    },
    {
      id: 1,
      name: "Ropsten",
    },
  ];
  return (
    <Wrapper>
      <BlackText>Select chain</BlackText>
      <Flex>
        {chains.map((item) => {
          return (
            <ChainWrapper
              border={item.id === chainSelected ? "#1C1C26" : "rgba(130, 130, 130, 0.5)"}
              onClick={() => setChainSelected(item.id)}
              key={item.id}
            >
              <FlexRow>
                <PinkDot
                  bg={item.id === chainSelected ? "#E6007A" : "#828282"}
                ></PinkDot>
                <BlackText>{item.name}</BlackText>
              </FlexRow>

              <Select
                bg={item.id === chainSelected ? "#E6007A" : "white"}
                color={item.id === chainSelected ? "white" : "#828282"}
              >
                Select
              </Select>
            </ChainWrapper>
          );
        })}
      </Flex>
    </Wrapper>
  );
};
