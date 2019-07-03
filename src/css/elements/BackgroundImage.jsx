import styled, { css } from 'styled-components';

const BackgroundImage = styled.div.attrs(props => ({
  style: { top: `${2 * -props.position}px` },
}))`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  ${props => props.render
    && css`
      opacity: 1;
    `}
`;

export default BackgroundImage;
