import React, {useEffect, useState} from 'react';
import {getComics} from '../../services/comics'
import {
  Header,
  HorizonScroll,
  Latest
} from '../../components'
import {Container} from './styles'

function Home() {

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
        <Header items={comics}/>
        <HorizonScroll/>
        <Latest/>
    </Container>
    );
}

export default Home;