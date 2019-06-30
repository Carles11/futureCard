import styled from 'styled-components';

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
`;

export default Article;
