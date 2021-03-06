import styled from 'styled-components'

export const ShowImage = styled.span`
  background: ${({ image }) => `url(${image})`};
  background-size: cover;
  width: 800px;
  height: 300px;
  max-height: 300px;
  background-color:purple;
  height: 300px;
  z-index: -99;
  top: 0px;
  position: absolute;
`