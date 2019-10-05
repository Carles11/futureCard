// @flow

import styled, { css } from "styled-components";

import withTheme from "@src/css/Theme";

const P = styled.p`
  font-family: Raleway, sans-serif;
  color: ${props => props.theme.fontColor};
  font-size: calc(16px + (17 - 15) * ((100vw - 600px) / (1600 - 900)));
  line-height: 1.5;
  text-align: left;

  ${props =>
    props.message &&
    css`
    display: block;
    margin: 2.5rem auto 2rem;
    text-align: center;
    border: 1px solid ${props.theme.background}
    color: ${props.theme.background}
    box-sizing: border-box;
    padding: 2rem;
    border-radius: 6px;
    width: 50%;
    background: #fafafa;

    @media only screen and (max-width: 1024px) {
        width: 100%;
      }
  `}

  ${props =>
    props.flex &&
    css`
      display: flex;
      align-items: center;
    `}


  ${props =>
    !!props.bold &&
    css`
      font-weight: 600;
    `}

  ${props =>
    !!props.centered &&
    css`
      text-align: center;
    `}

  ${props =>
    !!props.invertColor &&
    css`
      color: white;
    `}

  ${props =>
    props.highlight &&
    css`
      color: ${props.theme.mainColor};
    `}

  ${props =>
    !!props.withAlign &&
    css`
      text-align: ${props.withAlign};
    `}
  
  ${props =>
    !!props.noMargin &&
    css`
      margin: 0;
    `}

  ${props =>
    !!props.withMargin &&
    css`
      margin: ${props.withMargin};
    `}

  ${props =>
    !!props.withPadding &&
    css`
      padding: ${props.withPadding};
    `}

  ${props =>
    props.small &&
    css`
      font-size: 0.98rem;
      line-height: 1.4rem;
    `}
  
  ${props =>
    props.tiny &&
    css`
      font-size: 0.75rem;
      line-height: 1.2rem;
    `}
  
  ${props =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `}
  
  ${props =>
    props.disabled &&
    css`
      opacity: 0.25;
    `}
`;

export default withTheme(P);
