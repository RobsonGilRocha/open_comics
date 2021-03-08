import styled from 'styled-components'

export const ContainerViewer = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  max-width: 173px;
  height: 258px;
`

export const ImgViewer = styled.div`
  position:absolute;
  background-image: ${({image})=> `url(${image})`};
  background-size:cover;
  width: 173px;
  height: 258px;
  z-index:5;
`
export const ImgOpacity = styled.div`
  position:absolute;
  width: 173px;
  height: 258px;
  z-index:100;
  background:rgba(1, 5, 3, .84);
`

export const AboutText = styled.span`
  font-family:'Nunito Sans';
  font-size: ${({size}) => size}px;
  font-weight: ${({weight})=> weight};
  color:${({color})=> color || '#FFFFFF'};
  
`
export const Wrapper = styled.div`
  position:relative;
  display:flex;
  z-index:999;
  width: 135px;
  height: 258px;
  padding: 13px 20px;
`