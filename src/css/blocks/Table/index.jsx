import styled, { css } from "styled-components";

import Header from "./Header";
import Row from "./Row";
import Body from "./Body";
import Column from "./Column";

const Table = styled.table`
  display: table;
  table-layout: fixed;
  width: 99%;
  background-color: transparent;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 1rem 0 1rem 0;

  ${props =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
`;

Table.Header = Header;
Table.Header.Column = Header.Column;
Table.Row = Row;
Table.Body = Body;
Table.Column = Column;

export default Table;
