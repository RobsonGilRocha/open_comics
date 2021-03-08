import React,{useEffect,useState} from 'react';
import {getComics} from '../../services/comics'
import {
  Search,
  ShowLast,
  Menu,
  Separator
} from '../';
import {
  Container,
  Row,
  Title,
  TitleBox,
  Wrapper,
  ContainerImage,
  ContainerOpacity,
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
            <ContainerImage key={index} image={comic.image.original_url}/>
          )
        }
        <ContainerOpacity/>
        <Wrapper>
        <Row >
            <TitleBox>
              <Title>OPENCOMICS</Title>
            </TitleBox>
            <Menu/>
            <Separator x={40}/>
            <Search/>
        </Row>
        {
          comics.results && comics.results.map((comic, index) =>            
            <ShowLast 
              key={index}
              title={comic.volume.name}
              issue={comic.issue_number}
              subtitle={comic.name}
              description={comic.description}
            />,
          )
        }
        </Wrapper>
    </Container>
  );
}

export default Header;