import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import ShowLast from './ShowLast'
import bat from '../images/Bat.png'

const Container = styled.div`
  width: 800px;
  height: 300px;
  max-height: 300px;
  background-image:url(${bat});
  background-position: center;
  background-size: cover;
 
`
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:34px;
  margin-right:29px;
` 
const Title = styled.span`
  font-family: 'Krona One';
  font-size: 18px;
  color: #FFFFFF;
`
const TitleBox = styled.div`
  width: 292px;
  height: 49px;
  background-color:#89786580;
  display: flex;
  align-items: center;
  margin-left:37px;
` 
const NavHome = styled.div` // temporario.
  width: 228px;
  height: 29px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #FFFFFF;
`
const NavNewComics = styled.div` // temporario. 
  width: 228px;
  height: 29px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #FFFFFF;
`
const NavMovies = styled.div` // temporario.
  width: 228px;
  height: 29px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #FFFFFF;
`

function Header() {
  return (
      <Container>
          <Row>
              <TitleBox>
                <Title>OI do Roberto</Title>
              </TitleBox>
              <NavHome>
                Home
              </NavHome>
              <NavNewComics>
                New Comics
              </NavNewComics>
              <NavMovies>
                Movies
              </NavMovies>
              <Search/>
          </Row>
          <ShowLast/>
      </Container>
  );
}

export default Header;