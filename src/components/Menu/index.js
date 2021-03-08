import React from 'react';
import { Container, Navigator } from './styles';
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <Container>
      <Link to="/">
        <Navigator>Home</Navigator>
      </Link>
      <Link to="/newcomics">
        <Navigator>New Comics</Navigator>
      </Link>
      <Link to="/movies">
        <Navigator>Movies</Navigator>
      </Link>
    </Container>
  );
}

export default Menu;