import styled, { css } from 'styled-components';

const Figure = styled.figure`
  ${props => props.card
    && css`
      position: relative;
      max-width: 100%;
      height: auto;
      margin: 0 1rem 0 0;

      @media only screen and (max-width: 1024px) {
        display: flex;
        justify-content: center;
        margin: 0 auto 2rem;
      }
    `}
  ${props => props.background
    && css`
      position: relative;
      margin: -90px 0 0;
      width: 100%;
      min-height: calc(100% + 90px);
      overflow: hidden;
    `}


`;

export default Figure;
