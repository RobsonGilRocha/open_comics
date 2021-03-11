import React, { useState, useEffect } from 'react';
import { Container, Navigator } from './styles';
import { Link } from 'react-router-dom'

function Menu() {
  const [clicked, setClicked] = useState(false)

  useEffect(()=>[clicked])

  function isClicked(){
    setClicked(!clicked)
  }


  console.warn(clicked)
  return (
    <Container>
      <Link to="/" style={{ textDecoration: 'none' }} onClick={()=> isClicked()}>
        <Navigator>Home</Navigator>
      </Link>
      <Link to="/newcomics" style={{ textDecoration: 'none' }}>
        <Navigator>New Comics</Navigator>
      </Link>
      <Link to="/movies" style={{ textDecoration: 'none' }}>
        <Navigator>Movies</Navigator>
      </Link>
    </Container>
  );
}

export default Menu;