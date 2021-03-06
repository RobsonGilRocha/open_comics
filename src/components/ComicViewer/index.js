import React from 'react';
import {
      ContainerViewer,
      ImgViewer,
      ContentWraper,
      AboutText,
} from './styles'


function ComicViewer({image, date, title, issue, description}) {
  return (
      <ContainerViewer>
          <ImgViewer image={image}/>
          <ContentWraper>
              <AboutText size={5}>{date}</AboutText>
              <AboutText size={12} weight={900}>{title} #{issue}</AboutText>
              <AboutText size={5} weight={600}>{description}</AboutText>
          </ContentWraper>
      </ContainerViewer>
  );
}

export default ComicViewer;