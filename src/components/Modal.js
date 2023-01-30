import React, { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { ModalChain } from "./ModalChain";
import { ModalToken } from "./ModalToken";
import { ModalAmount } from "./ModalAmount";
const Wrapper = styled.div`
  position: absolute;
  bottom: 20%;
  width: 386px;
  height: 288px;
  border-radius: 25px;
  background-color: white;
  z-index: 3;
  padding: 20px;
`;
const OuterWrapper = styled.div`
width: 950px;
position: relative;
height: 288px;
top: 45%;
`
export const Modal = ({ activeModalId, activate, refContainer, refTab ,left}) => {


  const modals = [
    {
      id: 0,
      content: <ModalToken />,
    },
    {
      id: 1,
      content: <ModalChain />,
    },
    {
      id: 2,
      content: <ModalAmount />,
    },
  ];
  return (
    <OuterWrapper>
      <Wrapper
        as={motion.div}
        animate={{ left: left, display: activate ? "block" : "none" }}
        transition={{ duration: 0.3 }}
      >
        {modals[activeModalId].content}
      </Wrapper>
    </OuterWrapper>
  );
};
