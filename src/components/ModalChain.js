import React from 'react'
import styled from "styled-components";
import ada from '../images/ADA.png'
import eth from '../images/ETh.png'
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  
`
const BlackText = styled.p`
 color:#333333;
  
`

export const ModalChain = () => {
  return (
   <Wrapper>
    <BlackText>Choose token</BlackText>
   </Wrapper>
  )
}
