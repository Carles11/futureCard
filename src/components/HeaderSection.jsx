import React from 'react';
import PropTypes from 'prop-types';

import { Header, H2, H3, Hr } from '@src/css/elements';

const HeaderSection = ({ title, subtitle }) => (
  <Header centered>
    <H2 secundaryColor withMargin='1rem 0 0.75rem'>
      {title}
    </H2>
    {!!subtitle && (
      <H3 withMargin='0' centered small>
        {subtitle}
      </H3>
    )}
    <Hr withSize='180px' withMargin='1.5rem 0 2rem' withAlign='center' />
  </Header>
);

HeaderSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default HeaderSection;
