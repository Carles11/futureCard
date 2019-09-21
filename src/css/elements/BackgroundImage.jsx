import styled, { css } from 'styled-components';

const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;

  ${props => props.section && css`
    height: 50vh
  `}
`;

export default BackgroundImage;
