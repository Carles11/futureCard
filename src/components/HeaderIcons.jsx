import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import withTheme from '@src/css/Theme';

const ButtonIconMenu = styled.button`
  position: absolute;
  top: 2.25rem;
  right: 2.25rem;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  z-index: 1101;

  &:hover .bars {
    background: ${props => props.theme.mainColor};
  }
`;

const Bar = styled.div`
  display: none;

  background: #fe4d10;
  width: 21px;
  height: 3px;
  margin-bottom: 4px;
  transition: background 0.3s ease-in-out, opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out;

  @media only screen and (max-width: 1024px) {
    display: block;
  }
`;

const Bar1 = styled(Bar)`
  transform-origin: top left;
  ${props => props.active
    && css`
      transform: rotate(45deg);
    `}
`;

const Bar2 = styled(Bar)`
  opacity: 1;
  ${props => props.active
    && css`
      opacity: 0;
    `}
`;

const Bar3 = styled(Bar)`
  transform-origin: bottom left;
  ${props => props.active
    && css`
      transform: rotate(-45deg);
    `}
`;

const IconMenu = ({ handleIconClick, visibility, theme }) => {
  const [active, setActive] = useState(visibility);

  useEffect(() => {
    if (active !== visibility) {
      setActive(visibility);
    }
  }, [visibility]);

  function handleClick() {
    setActive(!active);
    handleIconClick(!active);
  }

  return (
    <ButtonIconMenu
      theme={theme}
      onClick={handleClick}
      arial-label="show/hide menu"
    >
      <Bar1 active={active} className="bars" />
      <Bar2 active={active} className="bars" />
      <Bar3 active={active} className="bars" />
    </ButtonIconMenu>
  );
};

IconMenu.propTypes = {
  handleIconClick: PropTypes.func.isRequired,
  visibility: PropTypes.bool.isRequired,
  theme: PropTypes.shape({}).isRequired,
};

export default withTheme(IconMenu);
