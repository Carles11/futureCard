import styled, { css } from 'styled-components';

import withTheme from '@src/css/Theme';

const H1 = styled.h1`
  color: ${props => props.theme.textColor};
  font-size: calc(40px + (45 - 35) * ((100vw - 600px) / (1600 - 900)));

  ${props => props.invertColor
    && css`
      color: #ffffff;
    `}
  
  ${props => props.serif
    && css`
      font-family: 'Hero light', 'Volkhov', serif;
      font-weight: 100;
    `}
    
  ${props => props.sansSerif
    && css`
      font-family: 'Hero regular', 'Raleway', sans-serif;
    `}
    
  ${props => props.upperCase
    && css`
      text-transform: upperCase;
    `}

  ${props => props.withSize
    && css`
      font-size: ${props.withSize};
    `}

  ${props => props.withMargin
    && css`
      margin: ${props.withMargin} !important;
    `}
`;

export default withTheme(H1);
