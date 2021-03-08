import React, {useState, useEffect} from 'react';
import { Header } from '../../components'
import MovieList from '../../components/MovieList' 
import {Container} from './styles'
import { getMovies } from '../../services/movies'

function Movies() {
  
  const [movies, setMovies] = useState({})
  const [limit, setLimit] = useState('1')

  useEffect(()=>{
    async function  fetchMovies(){
      const response = await getMovies(limit)
      setMovies(response.data)
    }
    fetchMovies()
  },[limit])


  return (
    <Container>
        <Header items={movies}/>
        <MovieList/>
    </Container>
  );
}

export default Movies;