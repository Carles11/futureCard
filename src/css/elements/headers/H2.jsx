import styled, { css } from 'styled-components';

import withTheme from '@src/css/Theme';

const H2 = styled.h2`
  color: ${props => props.theme.mainColor};
  font-size: calc(35px + (40 - 30) * ((100vw - 600px) / (1600 - 900)));

  ${props => props.invertColor
    && css`
      color: #ffffff;
    `}

  ${props => props.serif
    && css`
      font-family: 'Volkhov', serif;
      font-weight: 100;
    `}

  ${props => props.tiny
    && css`
      font-size: calc(25px + (30 - 20) * ((100vw - 600px) / (1600 - 900)));
    `}

  ${props => props.withMargin
    && css`
      margin: ${props.withMargin};
    `}
`;

export default withTheme(H2);
