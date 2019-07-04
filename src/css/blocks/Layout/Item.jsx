import styled from 'styled-components';

import withTheme from '@src/css/Theme';

const Item = styled.button`
  background: transparent;
  color: white;
  font-size: 1rem;
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 0.25rem;
  padding: 0.5rem 0.5rem 0.5rem;
  border: none;
  border-bottom: 3px solid transparent;
  transition: border-color 0.3s ease-in-out;
  cursor: pointer;
  outline: none;

  &.active,
  &:hover {
    border-bottom: 3px solid ${props => props.theme.mainColor};
  }

  @media only screen and (max-width: 649px) {
    width: 80%;
    text-align: center;
    color: white;
    border: none;
    box-sizing: border-box;
    border-bottom: 1px solid #3f424e;
    padding: 2rem;
    transition: color 0.3s ease-in-out;
    &:last-child {
      border: none;
    }

    &.active,
    &:hover {
      border: none;
      box-sizing: border-box;
      border-bottom: 1px solid #3f424e;
      color: ${props => props.theme.mainColor};
      &:last-child {
        border: none;
      }
    }
  }
`;

export default withTheme(Item);
