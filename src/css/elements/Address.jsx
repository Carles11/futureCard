import styled, { css } from "styled-components";

const Address = styled.address`
  position: relative;
  font-style: normal;

  ${props =>
    props.wrapping &&
    css`
      width: 225px;
      padding-right: 2rem;
      margin-bottom: 1rem;

      @media only screen and (max-width: 1024px) {
        width: 100%;
      }

      &:last-of-type {
        padding-right: 0;
      }
    `};

  ${props =>
    props.flex &&
    css`
      flex: ${props.flex};
    `}

  ${props =>
    props.withMargin &&
    css`
      margin: ${props.withMargin};
    `};
`;

export default Address;
