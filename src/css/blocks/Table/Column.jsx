import styled from "styled-components";

const Column = styled.td`
  position: relative;
  text-align: center;
  vertical-align: middle;

  &:first-of-type {
    text-align: left;
    padding-left: 2rem;
  }
`;

// const Header = styled.header`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   margin-left: 1rem;
// `;

// Column.Header = Header;

export default Column;
