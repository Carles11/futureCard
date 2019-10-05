import styled, { css } from "styled-components";

import withTheme from "@src/css/Theme";

const H4 = styled.h4`
  color: ${props => props.theme.fontColor};
  font-size: calc(15px + (18 - 12) * ((100vw - 600px) / (1600 - 900)));

  ${props =>
    props.invertColor &&
    css`
      color: #ffffff;
    `}

  ${props =>
    props.highlight &&
    css`
      color: ${props.theme.mainColor};
    `}
  

  ${props =>
    props.serif &&
    css`
      font-family: "hero_lightregular", serif;
      font-weight: 100;
    `}

  ${props =>
    props.withSize &&
    css`
      font-size: ${props.withSize};
    `}

  ${props =>
    props.withMargin &&
    css`
      margin: ${props.withMargin};
    `}
  
  ${props =>
    props.centered &&
    css`
      text-align: center;
    `}
    
  ${props =>
    props.withAlign &&
    css`
      text-align: ${props.withAlign};
    `}

  ${props =>
    props.small &&
    css`
      font-size: calc(30px + (35 - 25) * ((100vw - 600px) / (1600 - 900)));
    `}

  ${props =>
    props.tiny &&
    css`
      font-size: calc(20px + (25 - 18) * ((100vw - 600px) / (1600 - 900)));
    `}
`;

export default withTheme(H4);
