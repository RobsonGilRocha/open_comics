import React from 'react';
import styled from 'styled-components';
import Button from './Button'
import ComicViewer from './ComicViewer'

const Container = styled.div`
  height: 500px;
  width: 800px;
  margin: 0 auto;
  background-color: #f4f4f4;
`
const Wraper = styled.div`
  display:flex;
  justify-content:space-between;
  align-items: center;
  margin-right:26px;
  
`
const LastComics = styled.span`
  width: 183px;
  height: 48px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  display: flex;
  align-items:center;
  color: #000000;
  margin-left:27px;
`
const Updates = styled.div`
  height: 430px;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-top: 11px;
  margin-left: 59px;
  flex-wrap:wrap;
`

function Latest() {
  return (
      <Container>
          <Wraper>
             <LastComics>
                Last Comics
             </LastComics>
             <Button bkcolor={'#0277BD'} collor={'#FFFFFF'} text={'See All'}/>
          </Wraper>
          <Updates> 
              <ComicViewer/>  
              <ComicViewer/>  
              <ComicViewer/>  
              <ComicViewer/>        
          </Updates>
      </Container>
  );
}

export default Latest;