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
      title={DIC.NAV_LABEL_TELECOM}
      subtitle={DIC.SOLUTIONS_END_TO_END_TELECOM_DESCRIPTION}
    />
    <Article centered>
      {DIC.SOLUTIONS_END_TO_END_TELECOM_CONTENT}
    </Article>
  </ViewLayout>
);

SolutionsEndToEndTelecom.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_SOLUTIONS: PropTypes.string.isRequired,
    NAV_LABEL_TELECOM: PropTypes.string.isRequired,
    SOLUTIONS_DESCRIPTION: PropTypes.string.isRequired,
    SOLUTIONS_END_TO_END_TELECOM_CONTENT: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(SolutionsEndToEndTelecom);
