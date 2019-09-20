import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';

import { Article } from '@src/css/elements';

/**
 * SolutionsEndToEndIdentification View Component
 *
 * @param {Object} props
 * @param {Object} props.DIC
 */
const SolutionsEndToEndIdentification = ({ DIC }) => (
  <ViewLayout
    title={`${DIC.NAV_LABEL_SOLUTIONS}`}
    description={DIC.SOLUTIONS_DESCRIPTION}
  >
    <HeaderSection
      title={DIC.NAV_LABEL_IDENTIFICATION}
      subtitle={DIC.SOLUTIONS_END_TO_END_IDENTIFICATION_DESCRIPTION}
    />
    <Article centered>
      {DIC.SOLUTIONS_END_TO_END_IDENTIFICATION_CONTENT}
    </Article>
  </ViewLayout>
);

SolutionsEndToEndIdentification.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_SOLUTIONS: PropTypes.string.isRequired,
    NAV_LABEL_IDENTIFICATION: PropTypes.string.isRequired,
    SOLUTIONS_DESCRIPTION: PropTypes.string.isRequired,
    SOLUTIONS_END_TO_END_IDENTIFICATION_DESCRIPTION: PropTypes.string.isRequired,
    SOLUTIONS_END_TO_END_IDENTIFICATION_CONTENT: PropTypes.string.isRequired,

  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(SolutionsEndToEndIdentification);
