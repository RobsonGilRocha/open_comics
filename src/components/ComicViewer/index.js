import React from 'react';
import dayjs from 'dayjs'
import ReadLink from '../../components/ReadLink'
import Separator from '../../components/Separator'
import {
      ContainerViewer,
      ImgViewer,
      ContentWraper,
      AboutText,
      Wrapper
} from './styles'


function ComicViewer({image, date, title, issue, description}) {
  return (
      <ContainerViewer>
          <ImgViewer image={image}/>
          <ContentWraper>
            <Wrapper>
                <AboutText size={8} color={'#888888'}>{date && dayjs(date).format('DD/MM/YYYY')}</AboutText>
                <Separator y={3}/>
                <AboutText size={12} weight={900} color={'#3E4648'}>{title} #{issue}</AboutText>
                <Separator y={2}/>
                <AboutText size={8} weight={600} color={'#555555'}>{description}</AboutText>
            </Wrapper>
            <ReadLink/>
          </ContentWraper>
      </ContainerViewer>
  );
}

export default ComicViewer;