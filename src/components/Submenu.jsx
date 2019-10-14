import React from 'react';
import PropTypes from 'prop-types';

import Submenu from '@src/css/blocks/Submenu';
import { Grid, P, Image } from '@src/css/elements';

import logo from '@src/assets/image/logo_transparent.png';

const SubmenuComponent = ({ items, DIC }) => (
  <Submenu vertical="center">
    {items.map((item) => {
      const LABEL = `NAV_LABEL_${item.label}`;
      const TEXT = `NAV_LABEL_${item.label}_TXT`;

      return (
        <Grid column lastWithMargin="0 5rem 0 0">
          <Submenu.Item key={item.key} to={item.link}>
            {DIC[LABEL]}
          </Submenu.Item>
          {item.child && item.child.length ? (
            <Grid column>
              {item.child.map((link) => {
                const SUB_LABEL = `NAV_LABEL_${link.label}`;
                return (
                  <Submenu.Subitem key={link.key} to={link.link}>
                    {DIC[SUB_LABEL]}
                  </Submenu.Subitem>
                );
              })}
            </Grid>
          ) : (
            <P tiny maxWidth="300px" withMargin="0 0 0 3rem">
              <em>{DIC[TEXT]}</em>
            </P>
          )}
        </Grid>
      );
    })}
    <Image menulogo src={logo} alt="logo" />
  </Submenu>
);

SubmenuComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  DIC: PropTypes.shape({
    NAV_LABEL_WHO_WE_ARE: PropTypes.string.isRequired,
    NAV_LABEL_FACILITY: PropTypes.string.isRequired,
    NAV_LABEL_CAREERS: PropTypes.string.isRequired,
  }).isRequired,
};

export default SubmenuComponent;
