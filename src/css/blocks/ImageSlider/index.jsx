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

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

ImageSlider.Figure = Figure;
ImageSlider.Image = Image;

export default ImageSlider;
