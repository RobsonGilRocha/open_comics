import styled from 'styled-components'
import vector from '../../assets/icon/Vector.svg'

export const ReadBox = styled.div`
  width: 27.12px;
  height: 14px; 
  display: flex;
  align-self:flex-end;
  align-items:center;
  text-align: center;
  justify-content:space-between;
  cursor:pointer;
`
export const ReadText = styled.span`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 8px;
  line-height: 11px;
  text-align:center;
  color: #0277BD;
`
export const ReadIcon = styled.span`
    background-image:url(${vector});
    background-position: center;
    background-size: cover;
    width: 3.13px;
    height: 5px;
`