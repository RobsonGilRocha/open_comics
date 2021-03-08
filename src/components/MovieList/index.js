import React, {useEffect, useState} from 'react';
import MovieViewer from '../../components/MovieViewer'
import Separator from '../../components/Separator'
import { getComics } from '../../services/comics'
import { MovieLast } from './styles'


function MovieList() {
  
  const [comics, setComics] = useState({})
  const [limit, setLimit] = useState('9')
 
  useEffect(()=>{
     async function fetchComics(){
       const response = await getComics(limit)
       setComics(response.data)
       
     }
     fetchComics()
  },[ limit])

  return (
    <MovieLast>
      {
        comics.results && comics.results.map((comic, index) => 
          <>
            <MovieViewer 
              key={index}
              image={comic.image.original_url}
              date={comic.cover_date}
              title={comic.volume.name}
              issue={comic.issue_number}
              description={comic.name}
            /> 
            <Separator y={56}/> 
          </>
        )
      }        
    </MovieLast>
  );
}

export default MovieList;