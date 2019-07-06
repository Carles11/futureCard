import styled from 'styled-components';

import withTheme from '@src/css/Theme';

const Button = styled.button`
  width: 130px;
  height: 40px;
  background: ${props => props.theme.mainColor}
  border: none;
  border-radius: 5px;
  position: relative;
  color: ${props => props.theme.fontWhite};
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  text-shadow: 1px 1px 1px rgba(0,0,0,.4);
  font-size: 15px;
  text-align: center;
  text-indent: 5px;
  box-shadow: 0px 3px 0px 0px rgba(0,0,0,.2);
  cursor: pointer;
`;

export default withTheme(Button);
