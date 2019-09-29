import styled, { css } from 'styled-components';

const Item = styled.li`
  color: ${props => props.theme.fontColor};
  font-size: calc(16px + (17 - 15) * ((100vw - 600px) / (1600 - 900)));
  line-height: 1.75;
  padding: 0.5rem 0;
  ${props => props.link
    && css`
      line-height: 1;
    `}
  ${props => props.withDecoration
    && css`
      list-style-type: circle;
    `}
`;

export default Item;
