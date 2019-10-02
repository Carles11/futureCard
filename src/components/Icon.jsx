import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';

const Icon = ({ children }) => (
  <IconContext.Provider
    value={{
      style: {
        verticalAlign: 'text-bottom',
        marginLeft: '0.4rem',
        fontSize: '1.05rem',
      },
    }}
  >
    {children}
  </IconContext.Provider>
);

Icon.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Icon;
