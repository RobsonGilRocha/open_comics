import React, {useEffect, useState} from 'react';
import {ComicViewer, Button} from '../'
import { getComics } from '../../services/comics'
import {
  Container,
  Wraper,
  LastComics,
  Updates
} from './styles'


function Latest() {
  
  const [comics, setComics] = useState({})
  const [limit, setLimit] = useState('4')
 
  useEffect(()=>{
     async function fetchComics(){
       const response = await getComics(limit)
       setComics(response.data)
       
     }
     fetchComics()
  },[ limit])

  return (
    <Container>
        <Wraper>
            <LastComics>
              Last Comics
            </LastComics>
            <Button bkcolor={'#0277BD'} collor={'#FFFFFF'} text={'See All'}/>
        </Wraper>
        <Updates>
          {
            comics.results && comics.results.map((comic, index) => 
              <ComicViewer 
                key={index}
                image={comic.image.original_url}
                date={comic.cover_date}
                title={comic.volume.name}
                issue={comic.issue_number}
                description={comic.name}
              />  
            )
          }        
        </Updates>
    </Container>
  );
}

export default Latest;