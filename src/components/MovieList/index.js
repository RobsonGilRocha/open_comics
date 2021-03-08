import React from 'react';
import MovieViewer from '../../components/MovieViewer'
import Separator from '../../components/Separator'
import { MovieLast } from './styles'


function MovieList({items}) {

  return (
    <MovieLast>
      {
        items.results && items.results.map((item, index) => 
          <>
            <MovieViewer 
              key={index}
              image={item.image.original_url}
              date={item.release_date}
              title={item.name}
              description={item.deck}
            /> 
            <Separator y={56}/> 
          </>
        )
      }        
    </MovieLast>
  );
}

export default MovieList;