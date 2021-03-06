import styled from 'styled-components'

export const ContainerViewer = styled.div`
  display:flex;
  width: 252px;
  height: 166px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-right:62px; 
  margin-bottom:49px;
`

export const ImgViewer = styled.div`
  background-image: ${({image})=> `url(${image})`};
  background-size:cover;
  height:166px;
  width:127px;
`
export const ContentWraper = styled.div`
  display:flex;
  height: 166px;
  width: 125px;
  flex-direction:column;
  align-items:center;
  justify-content:space-evenly; // temporario.
`
export const AboutText = styled.span`
  font-family:'Nunito Sans';
  font-size: ${({size}) => size}px;
  font-weight: ${({weight})=> weight};
  line-height: 7px;
  display: flex;
  align-items: center;
`