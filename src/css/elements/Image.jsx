import styled, { css } from "styled-components";

import withTheme from "@src/css/Theme";

const Image = styled.img`
  ${props =>
    props.section &&
    css`
      position: relative;
      opacity: 0.9;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;

      @media only screen and (max-width: 1024px) {
        height: auto;
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
      }
    `}

  ${props =>
    props.withMargin &&
    css`
      margin: ${props.withMargin};
    `}

    ${props =>
      props.graphics &&
      css`
        margin: 100px ${props.withMargin};
        width: 80%;
        @media only screen and (min-width: 1024px) {
          width: 60%;
        }
      `}

  ${props =>
    props.responsive &&
    css`
    width: 100%;
      @media only screen and (max-width: 1024px) {
        height: auto;
        width: 100%;
      @media only screen and (max-width: 1024px) {
        left: 50%;
      }
    `}

  ${props =>
    props.contactSize &&
    css`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
      @media only screen and (max-width: 1024px) {
        height: auto;
        width: 80%;
      @media only screen and (min-width: 1024px) {
        left: 50%;
      }
    `}

  ${props =>
    props.preview &&
    css`
      width: 100%;
      height: auto;
      margin: 0;
      padding: 0;
    `}

  ${props =>
    props.carousel &&
    css`
      opacity: 0.5;
      transform: scale(1);
      transition: opacity ease-in-out 0.1s, transform ease-in-out 0.1s;
      cursor: pointer;
      width: 100%;

      &:hover {
        cursor: pointer;
        opacity: 1
        transform: scale(1.2);
      }

      ${props.active &&
        css`
          opacity: 1 !important;
          transform: scale(1.2) !important;
        `}

      @media only screen and (max-width: 1024px) {
        height: auto;
        width: 100%;
      @media only screen and (max-width: 1024px) {
        left: 50%;
      }
    `}

  
`;

export default withTheme(Image);
