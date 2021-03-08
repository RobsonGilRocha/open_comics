import styled from 'styled-components'

export const ContainerViewer = styled.div`
  display:flex;
  width: 252px;
  max-height: 166px;
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
  width: 125px;
  max-height: 166px;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
  margin: 0 auto;
  padding: 17px 15px 5px 12px;
`
export const AboutText = styled.span`
  font-family:'Nunito Sans';
  font-size: ${({size}) => size}px;
  font-weight: ${({weight})=> weight};
  color:${({color})=> color || '#FFFFFF'};
`
export const Wrapper = styled.div`
  display:flex;
  align-self:flex-start;
  flex-direction:column;
`