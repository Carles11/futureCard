import styled, { css } from 'styled-components';

import withTheme from '@src/css/Theme';

const H2 = styled.h2`
  color: ${props => props.theme.fontColor};
  font-size: calc(35px + (40 - 30) * ((100vw - 600px) / (1600 - 900)));
  font-weight: lighter;
  line-height: 1.4;

  ${props => props.flex
    && css`
      flex: ${props.flex};
    `}

  ${props => props.secundaryColor
    && css`
      color: ${props.theme.mainColor};
    `}
    
  ${props => props.invertColor
    && css`
      color: #ffffff;
    `}

  ${props => props.serif
    && css`
      font-family: "hero_lightregular", serif;
      font-weight: 100;
    `}
  
  ${props => props.sansSerif
    && css`
      font-family: "hero_lightregular", "Raleway", sans-serif;
    `}

  ${props => props.small
    && css`
      font-size: calc(30px + (35 - 25) * ((100vw - 600px) / (1600 - 900)));
    `}

  ${props => props.tiny
    && css`
      font-size: calc(18px + (20 - 16) * ((100vw - 600px) / (1600 - 900)));
    `}
  ${props => props.withMargin
    && css`
      margin: ${props.withMargin};
    `};

  ${props => props.centered
    && css`
      text-align: center;
    `};
    
    ${props => props.withAlign
      && css`
        text-align: ${props.withAlign};
      `}
`;

export default withTheme(H2);
