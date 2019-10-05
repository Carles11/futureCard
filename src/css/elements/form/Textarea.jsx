import styled from "styled-components";
import withTheme from "@src/css/Theme";

const Textarea = styled.textarea`
  border: none;
  border-bottom: 1px solid ${props => props.theme.mainColor};
  width: auto;
  margin: 10px 17px 17px 17px;
  color: ${props => props.theme.fontColor};
  outline: none;

  @media only screen and (min-width: 1024px) {
    margin: 10px;
  }
`;

export default withTheme(Textarea);
