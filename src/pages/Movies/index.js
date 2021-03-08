import React, {useState, useEffect} from 'react';
import { Header } from '../../components'
import MovieList from '../../components/MovieList' 
import {Container} from './styles'
import { getMovies, getMovie } from '../../services/movies'

function Movies() {
  
  const [movie, setMovie] =useState({})
  const [movies, setMovies] = useState({})
  const [limit, setLimit] = useState('1')
  const size = 9

  useEffect(()=>{
    async function  fetchMovies(){
      const response = await getMovies(size)
      const resp = await getMovie(limit)
      setMovies(response.data)
      setMovie(resp.data)
    }
    fetchMovies()
  },[limit])


  return (
    <Container>
        <Header items={movie}/>
        <MovieList items={movies}/>
    </Container>
  );
}

export default Movies;