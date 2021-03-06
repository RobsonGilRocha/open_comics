import React from 'react';
import {
      Btn,
      TextButton
} from './styles'
  
function Button({text, collor, bkcolor}) {
  return (
      <Btn bkcolor={bkcolor}>
        <TextButton collor={collor}>{text}</TextButton>
      </Btn>
  );
}

export default Button;