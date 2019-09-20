import styled, { css } from 'styled-components';

const Image = styled.img`
  ${props => props.section
    && css`
      position: absolute;
      opacity: 0.3;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;

      @media only screen and (max-width: 1024px) {
        height: auto;
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
      }
    `}
  ${props => props.withMargin
    && css`
      margin: ${props.withMargin};
    `}

  ${props => props.responsive
    && css`
    width: 100%;
      @media only screen and (max-width: 1024px) {
        height: auto;
        width: 100%;
      @media only screen and (max-width: 1024px) {
        left: 50%;
      }
    `}
`;

export default Image;
