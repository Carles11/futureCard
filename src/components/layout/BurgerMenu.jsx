import React from 'react';
import styled from 'styled-components';


const MainBurger = styled.div`
    padding: 10px;
    display: inline-block;
    align-content: end;
    cursor: pointer;
`;

const Burger = styled.div`
  width: 50px;
  margin: 8px 0;
  background: #0a6284;
  padding: 6px;
  justify-items: end;
`;

const BurgerMenu = props => (
  <nav>
    <div />
    <div />
    <div />
    <MainBurger onClick={props.handleClick}>
      <Burger />
      <Burger />
      <Burger />
    </MainBurger>
  </nav>
);

export default BurgerMenu;
