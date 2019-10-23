import styled from 'styled-components';
import withTheme from '@src/css/Theme';

const Label = styled.label`
  color: ${props => props.theme.fontColor};
  font-size: 0.8rem;
  width: auto;
  margin: 1rem auto 0.1rem 1rem;
`;

export default withTheme(Label);
