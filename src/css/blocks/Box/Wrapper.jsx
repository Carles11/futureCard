import styled from 'styled-components';
import withTheme from '@src/css/Theme';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 325px;
  z-index: 2;
  color: white;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    opacity: 0.9;
    background: ${props => props.theme.mainColor};
  }
`;

export default withTheme(Wrapper);
