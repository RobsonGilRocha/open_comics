import React from 'react';
import styled from 'styled-components'
import Header from './Header';
import HorizonScroll from './HorizonScroll'
import Latest from './Latest'

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
background-color:#f4f4f4; 
margin: 0px auto;
`

function HomePage() {
  return (
    <Container>
        <Header/>
        <HorizonScroll/>
        <Latest/>
    </Container>
    );
}

export default HomePage;