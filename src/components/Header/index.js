import React,{useEffect,useState} from 'react';
import {getComics} from '../../services/comics'
import {
  HeaderImage,
  Search,
  ShowLast
} from '../';
import {
  Container,
  Row,
  Title,
  TitleBox,
} from './styles'


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