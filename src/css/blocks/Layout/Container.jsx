import styled, { css } from "styled-components";

import withTheme from "@src/css/Theme";

const Container = styled.div`
  position: relative;
  background: transparent;
  color: ${props => props.theme.fontColor};
  font-size: 0.8rem;
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 0.25rem;
  padding: 0.5rem 0.5rem 0.5rem;
  border: none;
  border-bottom: 3px solid transparent;
  transition: border-color 0.3s ease-in-out;
  cursor: pointer;
  outline: none;

  ${props =>
    props.active &&
    css`
      border-bottom: 3px solid ${props.theme.mainColor};
    `}

  &:hover {
    border-bottom: 3px solid ${props => props.theme.mainColor};
  }

  ${props =>
    props.with_dark &&
    css`
      color: white;
    `}

  @media only screen and (max-width: 1024px) {
    width: 80%;
    text-align: center;
    color: white;
    border: none;
    box-sizing: border-box;
    border-bottom: 1px solid #1c1f28;
    padding: 2rem;
    transition: color 0.3s ease-in-out;
    &:last-child {
      border: none;
    }

    &.active,
    &:hover {
      border: none;
      box-sizing: border-box;
      border-bottom: 1px solid #1c1f28;
      color: ${props => props.theme.mainColor};
      &:last-child {
        border: none;
      }
    }
  }
`;

export default withTheme(Container);
