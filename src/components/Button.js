import React from 'react';
import styled from 'styled-components'

const Btn = styled.div`
  width: 117px;
  height: 36px;
  background: ${({bkcolor}) => bkcolor}; 
  border-radius: 6px;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 8px;
  cursor:pointer;
`
const TextButton = styled.span`
  width: 102px;
  height: 20px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: ${({collor}) => collor};
  cursor:pointer;
`
function Button({text, collor, bkcolor}) {
  return (
      <Btn bkcolor={bkcolor}>
        <TextButton collor={collor}>{text}</TextButton>
      </Btn>
  );
}

export default Button;