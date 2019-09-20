import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';

import { Article } from '@src/css/elements';

/**
 * SolutionsEndToEndTelecom View Component
 *
 * @param {Object} props
 * @param {Object} props.DIC
 */
const SolutionsEndToEndTelecom = ({ DIC }) => (
  <ViewLayout
    title={`${DIC.NAV_LABEL_SOLUTIONS}`}
    description={DIC.SOLUTIONS_DESCRIPTION}
  >
    <HeaderSection
      title={DIC.NAV_LABEL_SOLUTIONS}
      subtitle={DIC.SOLUTIONS_DESCRIPTION}
    />
    <Article centered />
  </ViewLayout>
);

SolutionsEndToEndTelecom.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_SOLUTIONS: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(SolutionsEndToEndTelecom);
