import styled, { css } from "styled-components";

import Item from "./Item";

const List = styled.ul`
  padding: 0 1rem 0 3rem;

  ${props =>
    props.link &&
    css`
      padding: 0 1rem 0 2rem;
      @media only screen and (max-width: 1024px) {
        padding: 0 1rem 0 2rem;
      }
    `}
  ${props =>
    props.centered &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 3rem;
    `}

  ${props =>
    props.wrapping &&
    css`
      display: flex;
      flex-wrap: wrap;
    `}
`;

List.Item = Item;

export default List;
