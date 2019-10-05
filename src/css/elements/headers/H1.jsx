import styled, { css } from 'styled-components';

import withTheme from '@src/css/Theme';

const H1 = styled.h1`
  color: ${props => props.theme.textColor};
  font-size: calc(40px + (45 - 35) * ((100vw - 600px) / (1600 - 900)));

  ${props =>
    props.small &&
    css`
      color: ${props.theme.fontColor};
      font-size: calc(35px + (40 - 30) * ((100vw - 600px) / (1600 - 900)));
      font-weight: lighter;
      line-height: 1.2;
    `}

  ${props =>
    props.invertColor &&
    css`
      color: #ffffff;
    `}
  
  ${props =>
    props.serif &&
    css`
      font-family: 'Hero light', serif;
      font-weight: 100;
    `}
    
  ${props =>
    props.sansSerif &&
    css`
      font-family: 'hero_lightregular', 'Raleway', sans-serif;
    `}
    
  ${props =>
    props.upperCase &&
    css`
      text-transform: upperCase;
    `}

    ${props =>
      props.firstCapital &&
      css`
        text-transform: capitalize;
      `}
  ${props =>
    props.withSize &&
    css`
      font-size: ${props.withSize};
    `}

  ${props =>
    props.withMargin &&
    css`
      margin: ${props.withMargin} !important;
    `}
    ${props =>
      props.withAlign &&
      css`
        text-align: ${props.withAlign};
      `}
`;

export default withTheme(H1);
