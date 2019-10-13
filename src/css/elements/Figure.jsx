import styled, { css } from "styled-components";

const Figure = styled.figure`
  ${props =>
    props.card &&
    css`
      position: relative;
      max-width: 100%;
      width: 100%;
      height: auto;
      margin: 0 3rem 0 1rem;

      @media only screen and (max-width: 1024px) {
        display: flex;
        justify-content: center;
        margin: 0 auto 2rem;
      }
    `}

    ${props =>
      props.box &&
      css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 340px;
        padding: 0;
        margin: 0;
        overflow: hidden;
        z-index: 0;

        @media only screen and (max-width: 1024px) {
          display: flex;
          justify-content: center;
          margin: 0 auto 2rem;
        }
      `}

  ${props =>
    props.fixed &&
    css`
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      margin: 0 !important;
      width: 100% !important;
      min-height: 100% !important;
      overflow: hidden !important;
    `}

  ${props =>
    props.background &&
    css`
      position: relative;
      margin: -90px 0 0;
      width: 100%;
      min-height: calc(100% + 90px);
      overflow: hidden;
    `}

    ${props =>
      props.section &&
      css`
        position: relative;
        width: 100%;
        min-height: 50vh;
        overflow: hidden;
        margin: 0;
        padding: 0;
      `}

      ${props =>
        props.body &&
        css`
          position: relative;
          width: 100%;
          min-height: 30vh;
          overflow: hidden;
          margin: 0;
          padding: 0;
        `}

    ${props =>
      props.preview &&
      css`
        position: relative;
        width: 100%;
        height: auto;
        overflow: hidden;
        margin: 0.5rem 0 0;
        padding: 0;
      `}
    
    ${props =>
      props.carousel &&
      css`
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0 0.25rem 0 0;
      `}
      
`;

export default Figure;
