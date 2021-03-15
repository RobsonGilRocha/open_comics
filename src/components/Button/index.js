import React from 'react';
import {
      Btn,
      TextButton
} from './styles'
  
function Button({text, collor, bkcolor}) {
  return (
      <Btn 
        bkcolor={bkcolor} 
        collor={collor}
        hoverTxtColor={bkcolor}
        hoverBkColor={collor}
        >
        <TextButton >{text}</TextButton>
      </Btn>
  );
}

export default Button;