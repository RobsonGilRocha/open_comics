import React from 'react';
import styled from 'styled-components'

const ContainerViewer = styled.div`
  display:flex;
  width: 252px;
  height: 166px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-right:62px; 
  margin-bottom:49px;
`

const ImgViewer = styled.div`
  background-image: ${({image})=> `url(${image})`};
  background-size:cover;
  height:166px;
  width:127px;
`
const ContentWraper = styled.div`
  display:flex;
  height: 166px;
  width: 125px;
  flex-direction:column;
  align-items:center;
  justify-content:space-evenly; // temporario.
`
const AboutText = styled.span`
  font-family:'Nunito Sans';
  font-size: ${({size}) => size}px;
  font-weight: ${({weight})=> weight};
  line-height: 7px;
  display: flex;
  align-items: center;
`
function ComicViewer({image, date, title, issue, description}) {
  return (
      <ContainerViewer>
          <ImgViewer image={image}/>
          <ContentWraper>
              <AboutText size={5}>{date}</AboutText>
              <AboutText size={12} weight={900}>{title} #{issue}</AboutText>
              <AboutText size={5} weight={600}>{description}</AboutText>
          </ContentWraper>
      </ContainerViewer>
  );
}

export default ComicViewer;