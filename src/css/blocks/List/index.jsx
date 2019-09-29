import styled, { css } from 'styled-components';

import Item from './Item';

const List = styled.ul`
  padding: 0 1rem 0 3rem;

  ${props => props.centered
    && css`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 3rem;
    `}
`;

List.Item = Item;

export default List;
