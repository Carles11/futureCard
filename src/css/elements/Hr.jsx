import styled, { css } from 'styled-components';

import withTheme from '@src/css/Theme';

const Hr = styled.hr`
  background: ${props => props.theme.mainColor};
  width: 100%;
  height: 3px;
  border: none;
  margin-left: 0;
  text-align: left;

  
  ${props => props.animation
    && css`
      width: 0
      transition: width 500ms ease-in-out 0.1s;

      ${props.animate
        && css`
          width: ${props.animate};
        `}

      ${props.initial
        && css`
          width: 0;
        `}
    `};

  ${props => props.withMargin
    && css`
      margin: ${props.withMargin};
    `}

  ${props => props.withAlign
    && css`
      text-align: ${props.withAlign};
    `}

  ${props => props.invertColor
    && css`
      background: #ededed;
    `}
    
    ${props => props.withSize
      && css`
        width: ${props.withSize};
        transition: width 500ms ease-in-out 0.1s;
      `};

`;

export default withTheme(Hr);
