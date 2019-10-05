import styled, { css } from "styled-components";

const Row = styled.tr`
  position: relative;
  height: 75px;
  background: white;
  border: 1px solid #ededed;
  padding: 10px;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;

  &:nth-child(2n - 1) {
    background: #ededed;
  }

  ${props =>
    props.header &&
    css`
      background: transparent !important;
      height: 60px;
      /* text-transform: uppercase; */
      vertical-align: middle;
      border: none;

      &:hover {
        background-color: transparent !important;
        border: none;
      }
    `}

  ${props =>
    props.height &&
    css`
      height: ${props.height}px !important;
    `}
`;

export default Row;
