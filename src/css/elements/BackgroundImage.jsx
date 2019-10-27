import styled, { css } from 'styled-components';

const BackgroundImage = styled.div.attrs({
  style: props => ({
    top: `${2 * -props.position}px`,
  }),
})`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;

  ${props =>
    props.section &&
    css`
      height: 50vh;
    `}

  /* eslint-ignore */
  ${props => {
    if (props.blur) {
      const value = `${props.blur}px`;

      return css`
        -webkit-filter: blur(${value}); /* Safari 6.0 - 9.0 */
        filter: blur(${value});
      `;
    }
  }}

`;

export default BackgroundImage;
