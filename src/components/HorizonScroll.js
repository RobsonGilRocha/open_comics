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
  width: 558px;
  height: 2px;
  display:flex;
  align-items:center;
  background: rgba(196, 196, 196, 0.5);
  border-radius: 1px;
  margin-right:32px;
`
const LineContent = styled.div`
  width: 116.49px;
  height: 2px;
  background:#2D3333;
  border-radius:1px;
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
  height:auto;
  display:flex;
  align-items:center;
  margin-top: 12px;
  margin-left: 27px;
  overflow:overlay;
  scroll-behavior:smooth;
  &::-webkit-scrollbar{  //Chrome, Safari and Opera
    display:none;
  }
  -ms-overflow-style:none;  //Chrome, Safari and Opera
  scrollbar-width:none;
`

function HorizonScroll() {

  return (
    <Container>
      <Row>
        <Title>
          Batman
        </Title>
        <Line>
          <LineContent/>
        </Line>
      </Row>
      <ComicContent>
        <ComicViewer/>
        <ComicViewer/>
        <ComicViewer/>
        <ComicViewer/>
        <ComicViewer/>
        <ComicViewer/>
        <ComicViewer/>
      </ComicContent>
    </Container>
  );
}

export default HorizonScroll;