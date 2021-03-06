import React from 'react';
import {ComicViewer, Button} from '../'
import {
  Container,
  Wraper,
  LastComics,
  Updates
} from './styles'


function Latest() {
  return (
      <Container>
          <Wraper>
             <LastComics>
                Last Comics
             </LastComics>
             <Button bkcolor={'#0277BD'} collor={'#FFFFFF'} text={'See All'}/>
          </Wraper>
          <Updates > 
              <ComicViewer/>  
              <ComicViewer/>  
              <ComicViewer/>  
              <ComicViewer/>        
          </Updates>
      </Container>
  );
}

export default Latest;