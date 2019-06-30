import styled from 'styled-components';

const BackgroundImage = styled.div.attrs(props => ({
  style: { top: `${2 * -props.position}px` },
}))`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default BackgroundImage;
