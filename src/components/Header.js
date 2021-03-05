import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import Search from './Search';
import ShowLast from './ShowLast'
import bat from '../images/Bat.png'
import Router from './Router'
import {getComics} from '../services/comics'

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

function Header() {

  const [comics, setComics] = useState({})
  const key = useState('')
  const limit = useState('')

  useEffect(()=>{
     async function fetchComics(){
       const response = await getComics(key,comics,limit)
       setComics(response.data)
     }
     fetchComics()
  },[key,comics,limit])

  return (
      <Container>
          <Row>
              <TitleBox>
                <Title>OPENCOMICS</Title>
              </TitleBox>
              <Router/>
              <Search/>
          </Row>
          {comics.results.map && comics.results.map((comic,index) => 
            <ShowLast 
            kay={index}
            title={comic.volume.name}
            />
            ) }
          
      </Container>
  );
}

export default Header;