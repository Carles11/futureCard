import styled, { css } from 'styled-components';

import withTheme from '@src/css/Theme';

const ItemFooter = styled.button`
  background: transparent;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  font-size: 0.9rem;
  text-transform: uppercase;
  text-decoration: none;
  margin: 0;
  padding: 0.5rem 0;
  transition: color 0.3s ease-in-out;
  outline: none;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.mainColor};
  }

  ${props =>
    props.active &&
    css`
      color: ${props.theme.mainColor};
    `}
`;

export default withTheme(ItemFooter);
