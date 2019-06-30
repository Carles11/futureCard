import styled, { css } from 'styled-components';

import withTheme from '@src/css/Theme';

const Hr = styled.hr`
  background: ${props => props.theme.mainColor};
  width: 100%;
  height: 6px;
  border: none;
  margin-left: 0;
  text-align: left;

  ${props => props.withSize
    && css`
      width: ${props.withSize};
    `};

  ${props => props.withMargin
    && css`
      margin: ${props.withMargin};
    `}
`;

export default withTheme(Hr);
