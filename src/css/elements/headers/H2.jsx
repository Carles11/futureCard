import styled, { css } from 'styled-components';

import withTheme from '@src/css/Theme';

const H2 = styled.h2`
  color: ${props => props.theme.fontColor};
  ${props => props.serif && css`
    font-family: "Volkhov", serif;
    font-weight: 100;
  `}
  ${props => props.invertColor && css`
    color: #fe4d10;  
  `}
  ${props => props.toFront && css`
  position: absolute;
  padding-top: 6%;
  `}
`;

export default withTheme(H2);
