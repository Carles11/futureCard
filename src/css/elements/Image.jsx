import styled, { css } from 'styled-components';

const Image = styled.img`
  ${props =>
    props.section &&
    css`
      position: relative;
      opacity: 0.9;
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
  ${props =>
    props.withMargin &&
    css`
      margin: ${props.withMargin};
    `}



    ${props =>
      props.graphics &&
      css`
        margin: 100px ${props.withMargin};
        width: 80%;
        @media only screen and (min-width: 1024px) {
          width: 60%;
        }
      `}



  ${props =>
    props.responsive &&
    css`
    width: 100%;
      @media only screen and (max-width: 1024px) {
        height: auto;
        width: 100%;
      @media only screen and (max-width: 1024px) {
        left: 50%;
      }
    `}

  ${props =>
    props.preview &&
    css`
      width: 100%;
      height: auto;
      margin: 0;
      padding: 0;
    `}
`;

export default Image;
