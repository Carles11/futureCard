import styled, { css } from 'styled-components';

import withTheme from '@src/css/Theme';

const H3 = styled.h3`
  color: ${props => props.theme.fontColor};
  font-size: calc(20px + (25 - 15) * ((100vw - 600px) / (1600 - 900)));

  ${props => props.invertColor
    && css`
      color: #ffffff;
    `}

  ${props => props.secundaryColor
    && css`
      color: ${props.theme.mainColor};
    `}

  ${props => props.sansSerif
    && css`
      font-family: 'Raleway', sans-serif;
    `}

  ${props => props.serif
    && css`
      font-family: 'Volkhov', serif;
      font-weight: 100;
    `}

  ${props => props.tiny
    && css`
      font-size: calc(18px + (20 - 15) * ((100vw - 600px) / (1600 - 900)));
    `}

  ${props => props.withSize
    && css`
      font-size: ${props.withSize};
    `}

  ${props => props.withMargin
    && css`
      margin: ${props.withMargin};
    `}
`;

export default withTheme(H3);
