import React from 'react';
import { useLocation } from 'react-router-dom'
import {
  Search,
  ShowLast,
  Menu,
  Separator
} from '../';
import {
  Container,
  Row,
  Title,
  TitleBox,
  Wrapper,
  ContainerImage,
  ContainerOpacity,
} from './styles'


function Header({items}) {

  let location = useLocation();

  return (
    <>
      {
        items.results && items.results.map((item, index) =>
          <Container key={index}>
            <ContainerImage image={item.image.original_url}/>
            <ContainerOpacity/>
          <Wrapper>
            <Row >
              <TitleBox>
                <Title>OPENCOMICS</Title>
              </TitleBox>
              <Menu/>
              <Separator x={40}/>
              <Search/>
            </Row> 
            {
               (location.pathname === '/newcomics' || location.pathname === '/')  ?
              <ShowLast 
                title={item.volume.name}
                issue={item.issue_number}
                subtitle={item.name}
                description={item.description}
              />
              : null
            }
            {
              location.pathname === '/movies' &&
              <ShowLast 
                title={item.name}
                subtitle={item.deck}
                description={item.description}
              />
            }         
            
          </Wrapper>
          </Container>
        ) 
      } 
    </>
  )
}       

export default Header;