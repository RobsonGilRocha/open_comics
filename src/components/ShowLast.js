import React from 'react';
import styled from 'styled-components'
import Button from './Button'

const ShowBox = styled.div`
  border-color:black;
  align-items: center;
  justify-content: center;
  margin-left: 107px;
  margin-bottom: 18px;
`
const ShowTitle = styled.div`
  width: 0 auto;
  height: 50px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
`
const ShowSubTitle = styled.div`
  width: 300px;
  height: 50px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
`
const ShowDescription = styled.div`
  width: 400px;
  height: 50px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: #FFFFFF; 
`
function ShowLast({image, title, issue, subtitle, description }) {
  return(
      <ShowBox >
          <ShowTitle >{title} #{issue}</ShowTitle>  
          <ShowSubTitle>{subtitle ? {subtitle} : 'Sorry we dont have a subtitle'}</ShowSubTitle>
          <ShowDescription>{description ? {description} : 'Sorry we dont have a description'}</ShowDescription>
          <Button bkcolor={'#FFFFFF'} collor={'#0277BD'} text={'Read'}/>  
      </ShowBox>
  ) ;
}

export default ShowLast;