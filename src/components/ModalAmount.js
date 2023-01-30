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
const BlackTextLarge = styled(BlackText)`
  font-size: 22px;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;
const AmountWrapper = styled.div`
  width: 100%;
  height: 69px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.button`
  width: 36px;
  height: 36px;
  background-color: rgba(139, 161, 190, 0.1);
  border-radius: 9px;
  border: none;
  font-size: 1.2rem;
`;
const Line = styled.div`
  height: 1px;
  background-color: #828282;
  width: 100%;
`;

export const ModalAmount = () => {
  const [max, setMax] = useState(10);
  const [min, setMin] = useState(1);
  return (
    <Wrapper>
      <BlackText>Filter by amount</BlackText>
      <AmountWrapper>
        <BlackTextLarge>Max amount</BlackTextLarge>
        <FlexRow>
          <Button onClick={() => setMax((prev) => prev - 1)}>-</Button>
          <BlackText>{max}</BlackText>
          <Button onClick={() => setMax((prev) => prev + 1)}>+</Button>
        </FlexRow>
      </AmountWrapper>
      <Line></Line>
      <AmountWrapper>
        <BlackTextLarge>Max amount</BlackTextLarge>
        <FlexRow>
          <Button onClick={() => setMin((prev) => prev - 1)}>-</Button>
          <BlackText>{min}</BlackText>
          <Button onClick={() => setMin((prev) => prev + 1)}>+</Button>
        </FlexRow>
      </AmountWrapper>
    </Wrapper>
  );
};
