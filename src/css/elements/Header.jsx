import styled, { css } from "styled-components";

const Header = styled.header`
  padding: 1rem;

  ${props =>
    props.background &&
    css`
    padding: 5%;
    box-sizing: border-box;
    width: 50%
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-40%);
    opacity: 0;
    transition: transform 2000ms cubic-bezier(.03,.94,0,.99) 0.2s,
    opacity 1000ms cubic-bezier(.03,.94,0,.99) 0.2s;

    ${props.animate &&
      css`
        transform: translateY(-50%);
        opacity: 1;
      `}

    ${props.initial &&
      css`
        transform: translateY(-60%);
        opacity: 0;
      `}

    @media only screen and (max-width: 1024px) {
      width: 100%;
      padding: 1.5rem;
    }
    @media only screen and (max-width: 1024px) {
      width: 100%;
      padding: 1.5rem;
    }
  `}

  ${props =>
    props.centered &&
    css`
      transform: translateY(100%)
      opacity: 0;
      transition: transform 2000ms cubic-bezier(0.03, 0.94, 0, 0.99) 0.1s,
        opacity 1000ms cubic-bezier(0.03, 0.94, 0, 0.99) 0.1s;

      ${props.animate &&
        css`
          transform: translateY(-5%);
          opacity: 1;
        `}

      ${props.initial &&
        css`
          transform: translateY(1%);
          opacity: 0;
        `}
      @media only screen and (min-width: 1024px) {
        display: flex;
        flex-direction: column;
        max-width: 1440px;
        margin: 0 auto;
        align-items: center;
        padding: 3rem 4rem 0;
        box-sizing: border-box;
        z-index: 1;
      }
      @media only screen and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 2.5rem 1.5rem 0;
        box-sizing: border-box;
        align-items: center;
        z-index: 1;
      }
    `}
    ${props =>
      props.left &&
      css`
        @media only screen and (min-width: 1024px) {
          display: flex;
          flex-direction: column;
          max-width: 1440px;
          margin: 0 auto;
          align-items: left;
          padding: 3rem 4rem 0;
          ox-sizing: border-box;
          z-index: 1;
        }
        @media only screen and (max-width: 1024px) {
          display: flex;
          flex-direction: column;
          width: 100%;
          padding: 2.5rem 1.5rem 0;
          box-sizing: border-box;
          align-items: left;
          z-index: 1;
        }
      `}
`;

export default Header;
