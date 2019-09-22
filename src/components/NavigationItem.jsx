import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';

import Submenu from '@src/components/Submenu';

import Layout from '@src/css/blocks/Layout';

const NavigationItem = memo(({ item, label, path, DIC, fn }) => {
  const [visible, setVisible] = useState(false);

  function handleSubmenu() {
    setVisible(!visible);
  }

  function handleClick() {
    setVisible(!visible);
    fn(false);
  }

  return (
    <Layout.Header.Navigation.Link
      key={item.key}
      active={path === item.link ? item.link.toString() : undefined}
      onMouseEnter={handleSubmenu}
      onMouseLeave={handleSubmenu}
      to={item.link}
      onClick={handleClick}>
      {label}
      {visible ? <Submenu items={item.child} DIC={DIC} /> : null}
    </Layout.Header.Navigation.Link>
  );
}, areEqual);

function areEqual(prevProps, nextProps) {
  return (
    prevProps.dark === nextProps.dark &&
    prevProps.DIC === nextProps.DIC &&
    prevProps.path === nextProps.path
  );
}

NavigationItem.propTypes = {
  item: PropTypes.shape({
    key: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
  }),
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  fn: PropTypes.func.isRequired,
  DIC: PropTypes.shape({}),
};

export default NavigationItem;
