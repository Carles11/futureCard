// @flow

import styled, { css } from 'styled-components';

import withTheme from '@src/css/Theme';

const P = styled.p`
  color: ${props => props.theme.fontColor};
  font-size: calc(16px + (17 - 15) * ((100vw - 600px) / (1600 - 900)));

  ${props => !!props.bold
    && css`
      font-weight: 600;
    `}

  ${props => !!props.invertColor
    && css`
      color: white;
    `}

  ${props => props.highlight
    && css`
      color: ${props.theme.mainColor};
    `}

  ${props => !!props.align
    && css`
      text-align: ${props.align};
    `}
  
  ${props => !!props.noMargin
    && css`
      margin: 0;
    `}

  ${props => !!props.withMargin
    && css`
      margin: ${props.withMargin};
    `}
  ${props => props.small
    && css`
      font-size: 0.9rem;
      line-height: 1.4rem;
    `}
  
  ${props => props.tiny
    && css`
      font-size: 0.75rem;
      line-height: 1.2rem;
    `}
  
  ${props => props.uppercase
    && css`
      text-transform: uppercase;
    `}
  
  ${props => props.disabled
    && css`
      opacity: 0.25;
    `}
`;

export default withTheme(P);
