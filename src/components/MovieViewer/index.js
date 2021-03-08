import React from 'react';
import dayjs from 'dayjs'
import Separator from '../../components/Separator'
import {
      ContainerViewer,
      ImgViewer,
      ImgOpacity,
      AboutText,
      Wrapper
} from './styles'


function MovieViewer({image, date, title, description}) {
  return (
    <ContainerViewer>
        <ImgViewer image={image}/>
        <ImgOpacity/>
        <Wrapper>
          <AboutText size={8} color={'#cccccc'}>{date && dayjs(date).format('DD/MM/YYYY')}</AboutText>
          <Separator y={3}/>
          <AboutText size={12} weight={900} color={'#ffffff'}>{title} </AboutText>
          <Separator y={2}/>
          <AboutText size={8} color={'#ffffff'}>{description}</AboutText>
        </Wrapper>
    </ContainerViewer>
  );
}

export default MovieViewer;