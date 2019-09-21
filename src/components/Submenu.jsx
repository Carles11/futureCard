import React from 'react';
import PropTypes from 'prop-types';

import Submenu from '@src/css/blocks/Submenu';

const SubmenuComponent = ({ items, DIC }) => (
  <Submenu vertical="center">
    {items.map((item) => {
      const LABEL = `NAV_LABEL_${item.label}`;
      return (
        <Submenu.Item key={item.key} to={item.link}>
          {DIC[LABEL]}
        </Submenu.Item>
      );
    })}
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
