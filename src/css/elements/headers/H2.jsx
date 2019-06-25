import styled, { css } from 'styled-components';

import withTheme from '@src/css/Theme';

const H2 = styled.h2`
  color: ${props => props.theme.fontColor};
<<<<<<< HEAD
  font-size: calc(35px + (40 - 30) * ((100vw - 600px) / (1600 - 900)));
  font-weight: lighter;
  line-height: 1.4;

  ${props => props.invertColor
    && css`
      color: #ffffff;
    `}

  ${props => props.serif
    && css`
      font-family: 'Volkhov', serif;
      font-weight: 100;
    `}
  
  ${props => props.sansSerif
    && css`
      font-family: 'Raleway', sans-serif;
    `}

  ${props => props.small
    && css`
      font-size: calc(30px + (35 - 25) * ((100vw - 600px) / (1600 - 900)));
    `}

  ${props => props.tiny
    && css`
      font-size: calc(20px + (25 - 18) * ((100vw - 600px) / (1600 - 900)));
    `}
  ${props => props.withMargin
    && css`
      margin: ${props.withMargin};
    `};

  ${props => props.centered
    && css`
      text-align: center;
    `};
=======
  ${props => props.serif && css`
    font-family: "Volkhov", serif;
    font-weight: 100;
  `}
  ${props => props.invertColor && css`
    color: #fe4d10;  
  `}
>>>>>>> new backgroundMap
`;

export default withTheme(H2);
