import React from 'react';
import { Container, Navigator } from './styles';

function Menu() {
  return (
      <Container>
          <Navigator>Home</Navigator>
          <Navigator>New Comics</Navigator>
          <Navigator>Movies</Navigator>
      </Container>
  );
}

export default Menu;