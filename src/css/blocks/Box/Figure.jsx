// @flow

import styled from 'styled-components';

const Figure = styled.figure`
  position: relative;
  width: 100%;
  height: 200px;
  margin: 0;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
`;

Figure.Image = Image;

export default Figure;
