import styled, { css } from 'styled-components';

const Article = styled.article`
  position: relative;
  width: 100%;
  height: auto;
  padding: 0 5%;
  box-sizing: border-box;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    padding: 0 2.5rem;
  }

  ${props => props.centered
    && css`
      @media only screen and (min-width: 1024px) {
        display: flex;
        flex-direction: column;
        max-width: 1440px;
        margin: 0 auto;
        align-items: center;
        padding: 1rem 2rem 4rem;
        box-sizing: border-box;
      }
      @media only screen and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 1rem 1.5rem 2.5rem;
        box-sizing: border-box;
        align-items: center;
      }
    `}

  ${props => props.with_margin
    && css`
      margin: ${props.with_margin} !important;
    `}
`;

export default Article;
