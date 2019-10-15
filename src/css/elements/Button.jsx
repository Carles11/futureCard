import styled, { css } from 'styled-components';

import withTheme from '@src/css/Theme';

const buttonDefault = css`
  position: relative;
  display: inline-block;
  background: transparent;
  color: ${props => props.theme.mainColor};
  margin: 0;
  padding: 0.9rem 2.25rem 0.8rem;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 0.05em;
  text-align: center;
  text-transform: uppercase;
  text-shadow: none;
  text-decoration: none;
  border-radius: 12rem;
  border: 2px solid ${props => props.theme.mainColor};
  box-shadow: none;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out,
    border-color 0.3s ease-in-out;

  ${props => css`
    background: ${props.theme.mainColor};
    color: white;
    border: 2px solid ${props.theme.mainColor};

    &:hover {
      background: transparent
      color: ${props.theme.mainColor};
      border: 2px solid ${props.theme.mainColor};
    }
  `}
  ${props =>
    props.align &&
    css`
      text-align: ${props.align};
    `}
`;

const Button = styled.button`

  ${buttonDefault}

  ${props =>
    props.invert &&
    css`
      background: transparent;
      color: ${props.theme.mainColor};

      ${props.active &&
        css`
          background: ${props.theme.mainColor};
          color: white;
        `}
      &:hover {
        background: ${props.theme.mainColor};
        color: white;
      }
    `}

  ${props =>
    props.withMargin &&
    css`
      margin: ${props.withMargin};
    `}

  ${props =>
    props.contact &&
    css`
      align-self: center;
      margin: 2rem;
    `}

  ${props =>
    props.state === 'disabled' &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
      &:hover {
        background: ${props.theme.backgroundSecundary};
      }
    `}
    
  ${props =>
    props.withIcon &&
    css`
      font-size: 1.3rem;
      padding: 1rem;
      display: block;
      line-height: 0;
    `}
  
  ${props =>
    props.transparent &&
    css`
    font-size: 1.25rem;
    background: transparent;
    border: none;
    color: ${props.theme.fontColor}
    padding: 1rem 0 1rem 1rem;

    &:hover {
      background: transparent;
      border: none;
      color: ${props.theme.mainColor};
      padding: 1rem 0 1rem 1rem;
    }
  `}
  

`;

const Icon = styled.i`
  margin-right: 0.5rem;
`;

const Centered = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  position: relative;
  margin-bottom: 3rem;
  ${props =>
    props.withMargin &&
    css`
      margin: ${props.withMargin};
    `}
`;

Button.Icon = Icon;
Button.Centered = Centered;

export default withTheme(Button);
