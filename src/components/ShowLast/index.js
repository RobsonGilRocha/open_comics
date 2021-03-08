import React from 'react';
import {Button} from '../'
import {
  ShowBox,
  ShowTitle,
  ShowSubTitle,
  ShowDescription
} from './styles'


function ShowLast({ title, issue, subtitle, description }) {
  return(
      <ShowBox >
          <ShowTitle >{title} #{issue}</ShowTitle>  
          <ShowSubTitle>{subtitle && subtitle }</ShowSubTitle>
          <ShowDescription>{description && description}</ShowDescription>
          <Button bkcolor={'#FFFFFF'} collor={'#0277BD'} text={'Read'}/>  
      </ShowBox>
  ) ;
}

export default ShowLast;