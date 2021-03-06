import React,{useEffect, useState} from 'react';
import {ComicViewer} from '../../components'
import {getBatman} from '../../services/batman'
import{
  Container,
  Row,
  Line,
  LineContent,
  Title,
  ComicContent,
} from './styles'


function HorizonScroll() {

  const [batman, setBatman] = useState({})
  const limit = useState('10')

  useEffect(()=>{
     async function fetchComicBatman(){
       const response = await getBatman(limit)
       setBatman(response.data)
     }
     fetchComicBatman()
  },[limit])

  return (
    <Container>
      <Row>
        <Title>
          Batman
        </Title>
        <Line>
          <LineContent/>
        </Line>
      </Row>
      <ComicContent>
          {
            batman.results && batman.results.map((comic, index) => 
              <ComicViewer 
                key={index}
                image={comic.image.original_url}
                date={comic.cover_date}
                title={comic.volume.name}
                issue={comic.issue_number}
                description={comic.name}
              />)
          }
      </ComicContent>
    </Container>
  );
}

export default HorizonScroll;