import styled, { css } from 'styled-components';

const Figure = styled.figure`
  ${props => props.background
    && css`
      position: relative;
      margin: -90px 0 0;
      width: 100%;
      min-height: calc(100% + 90px);
      overflow: hidden;
    `}
`;

export default Figure;
