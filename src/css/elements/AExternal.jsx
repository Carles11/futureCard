// @flow

import styled from 'styled-components';

import withTheme from '@src/css/Theme';

const AExternal = styled.a`
  color: white;
  font-size: 1.1rem;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  margin-left: 1rem;

  &:hover {
    color: ${props => props.theme.mainColor};
    text-decoration: none;
  }
`;

export default withTheme(AExternal);
