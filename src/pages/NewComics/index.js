import React, {useEffect, useState} from 'react';
import { Header } from '../../components'
import {Container} from './styles'
import {getComics} from '../../services/comics'

function NewComics() {

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
    </Container>
  );
}

export default NewComics;