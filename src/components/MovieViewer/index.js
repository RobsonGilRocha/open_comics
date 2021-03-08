import React from 'react';
import dayjs from 'dayjs'
import Separator from '../../components/Separator'
import {
      ContainerViewer,
      ImgViewer,
      ImgOpacity,
      AboutText,
      Wrapper,
      ContentWrapper
} from './styles'


function MovieViewer({image, date, title, description}) {
  return (
    <ContainerViewer>
        <ImgViewer image={image}/>
        <ImgOpacity/>
        <Wrapper>
        <ContentWrapper>
          <ContentWrapper>
          <AboutText size={8} color={'#cccccc'}>Relase date: {date && dayjs(date).format('DD/MM/YYYY')}</AboutText>
          </ContentWrapper>
          <ContentWrapper>
          <AboutText size={12} weight={900} color={'#ffffff'}>{title} </AboutText>
          
          <AboutText size={8} color={'#ffffff'}>{description}</AboutText>
          </ContentWrapper>
          </ContentWrapper>
        </Wrapper>
    </ContainerViewer>
  );
}

export default MovieViewer;