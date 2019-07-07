import styled, { css } from 'styled-components';

const Article = styled.article`
  position: relative;
  width: 100%;
  height: auto;
  padding: 0 5%;
  box-sizing: border-box;

  @media only screen and (max-width: 649px) {
    width: 100%;
    padding: 0 2.5rem;
  }

  ${props => props.centered
    && css`
      @media only screen and (min-width: 649px) {
        display: flex;
        flex-direction: column;
        max-width: 1440px;
        margin: 0 auto;
        align-items: center;
        padding: 4rem;
        box-sizing: border-box;
      }
      @media only screen and (max-width: 649px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 2.5rem;
        box-sizing: border-box;
        align-items: center;
      }
    `}
`;

export default Article;
