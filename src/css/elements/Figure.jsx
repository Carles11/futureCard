import styled, { css } from 'styled-components';

const Figure = styled.figure`
  ${props => props.background
    && css`
      position: absolute;
      top: 0;
      left: 0;
      margin: 0;
      width: 100%;
      min-height: 100%;
      overflow: hidden;
    `}
`;

export default Figure;
