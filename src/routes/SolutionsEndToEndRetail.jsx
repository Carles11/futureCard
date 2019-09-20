import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';

import { Article } from '@src/css/elements';

/**
 * SolutionsEndToEndRetail View Component
 *
 * @param {Object} props
 * @param {Object} props.DIC
 */
const SolutionsEndToEndRetail = ({ DIC }) => (
  <ViewLayout
    title={`${DIC.NAV_LABEL_SOLUTIONS}`}
    description={DIC.SOLUTIONS_DESCRIPTION}
  >
    <HeaderSection
      title={DIC.NAV_LABEL_RETAIL_LOYALTY}
      subtitle={DIC.SOLUTIONS_END_TO_END_RETAIL_DESCRIPTION}
    />
    <Article centered>
      {DIC.SOLUTIONS_END_TO_END_RETAIL_CONTENT}
    </Article>
  </ViewLayout>
);

SolutionsEndToEndRetail.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_SOLUTIONS: PropTypes.string.isRequired,
    NAV_LABEL_RETAIL_LOYALTY: PropTypes.string.isRequired,
    SOLUTIONS_END_TO_END_RETAIL_DESCRIPTION: PropTypes.string.isRequired,
    SOLUTIONS_END_TO_END_RETAIL_CONTENT: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(SolutionsEndToEndRetail);
