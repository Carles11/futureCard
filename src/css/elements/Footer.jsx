import styled, { css } from 'styled-components';

import { hexToRgb } from '@src/utils/helpers';
import withTheme from '@src/css/Theme';

const Footer = styled.footer`
  width: 100%;
  height: auto;
 
     ${(props) => {
    const { r: rPrimary, g: gPrimary, b: bPrimary } = hexToRgb(
      props.theme.fontColor,
    );
    const { r: rSecundary, g: gSecundary, b: bSecundary } = hexToRgb(
      props.theme.fontColorDarker,
    );
    return css`
      background: rgb(${rPrimary}, ${gPrimary}, ${bPrimary});
      background: -moz-linear-gradient(
        -45deg,
        rgba(${rPrimary}, ${gPrimary}, ${bPrimary}, 1) 0%,
        rgba(${rSecundary}, ${gSecundary}, ${bSecundary}, 1) 100%
      );
      background: -webkit-linear-gradient(
        -45deg,
        rgba(${rPrimary}, ${gPrimary}, ${bPrimary}, 1) 0%,
        rgba(${rSecundary}, ${gSecundary}, ${bSecundary}, 1) 100%
      );
      background: linear-gradient(
        135deg,
        rgba(${rPrimary}, ${gPrimary}, ${bPrimary}, 1) 0%,
        rgba(${rSecundary}, ${gSecundary}, ${bSecundary}, 1) 100%
      );
    `;
  }};
`;

export default withTheme(Footer);
