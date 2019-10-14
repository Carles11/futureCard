import styled from 'styled-components';

import Figure from './Figure';
import Image from './Image';

const ImageSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  overflow: hidden;
  padding: 2rem 0;
  min-height: 40vh;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    min-height: 25vh;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    min-height: 20vh;
  }
`;

ImageSlider.Figure = Figure;
ImageSlider.Image = Image;

export default ImageSlider;
