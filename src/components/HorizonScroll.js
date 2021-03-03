import React from 'react';
import styled from 'styled-components'
import ComicViewer from './ComicViewer'

const Container = styled.div` // temporario.
  height: 300px;
  width: 800px;
`
const Row = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top:30px;
`
const Line = styled.div`
  height:2px;
  width:558px;
  background-color:gray;
  border-radius: 1px;
  margin-right:32px;
`
const Title = styled.div`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  display: flex;
  align-items: center;
  margin-left:27px;
  width: 183px;
  height: 48px;
`
const ComicContent = styled.div`
  height:220px;;
  display:flex;
  align-items:center;
  margin-top: 12px;
  margin-left: 27px;
  overflow-x:hidden;
`

function HorizonScroll() {
  return (
    <Container>
      <Row>
        <Title>
          Batman
        </Title>
        <Line/>
      </Row>
      <ComicContent>
        <ComicViewer/>
        <ComicViewer/>
        <ComicViewer/>
      </ComicContent>
    </Container>
  );
}

export default HorizonScroll;