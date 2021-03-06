import styled, { css, keyframes } from 'styled-components';

const AnimateVisibility = keyframes`
  0% {
    display: none;
    opacity: 0;
  }
  1% {
    display: block;
    opacity: 0;
  }
  100% {
    display: block;
    opacity: 1;
  }
`;

const Section = styled.section`
  position: relative;
  display: block;
  width: 100%;
  height: 100vh;
  padding: 90px 0 0;
  margin: 0;
  box-sizing: border-box;

  ${props => props
    && css`
      animation: ${AnimateVisibility} 0.3s ease-in-out 0s;
    `}
`;

export default Section;
