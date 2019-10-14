import React from 'react';
import PropTypes from 'prop-types';

import BackgroundBreadcrumb from '@src/css/blocks/BackgroundBreadcrumb';

const BackgroundBreadcrumbComponent = ({ data, DIC }) => (
  <BackgroundBreadcrumb>
    {data.map(item => (
      <BackgroundBreadcrumb.Item to={item.url}>
        {DIC[`NAV_LABEL_${item.label}`]}
      </BackgroundBreadcrumb.Item>
    ))}
  </BackgroundBreadcrumb>
);

BackgroundBreadcrumbComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
  DIC: PropTypes.shape({
    APP_DESCRIPTION: PropTypes.string.isRequired,
    ABOUT_US: PropTypes.string.isRequired,
    LANDING_TITLE: PropTypes.string.isRequired,
    LANDING_SUBTITLE: PropTypes.string.isRequired,
    LEARN_MORE: PropTypes.string.isRequired,
  }).isRequired,
};

export default BackgroundBreadcrumbComponent;
