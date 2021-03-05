import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import Search from './Search';
import ShowLast from './ShowLast'
import Router from './Router'
import {getComics} from '../services/comics'
import HeaderImage from './HeaderImage';

const Container = styled.div`
  width: 800px;
  height: 300px;
  max-height: 300px;
  
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
  display: flex;
  align-items: center;
  margin-left:37px;
` 

function Header() {

  const [comics, setComics] = useState({})
  const [limit, setLimit] = useState('1')
 
  useEffect(()=>{
     async function fetchComics(){
       const response = await getComics(limit)
       setComics(response.data)
       
     }
     fetchComics()
  },[ limit])


  return (
      <Container>
          {
            comics.results && comics.results.map((comic, index) =>
              <HeaderImage key={index} image={comic.image.original_url}/>
            )
          }
          <Row >
              <TitleBox>
                <Title>OPENCOMICS</Title>
              </TitleBox>
              <Router/>
              <Search/>
          </Row>
          {comics.results && comics.results.map((comic, index) =>            
            <ShowLast 
             key={index}
             title={comic.volume.name}
             issue={comic.issue_number}
             subtitle={comic.name}
             description={comic.description}
            />,
           )
          }
          
      </Container>
  );
}

export default Header;