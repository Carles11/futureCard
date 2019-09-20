import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';

import { Article } from '@src/css/elements';

/**
 * SolutionsEndToEndTransport View Component
 *
 * @param {Object} props
 * @param {Object} props.DIC
 */
const SolutionsEndToEndTransport = ({ DIC }) => (
  <ViewLayout
    title={`${DIC.NAV_LABEL_SOLUTIONS}`}
    description={DIC.SOLUTIONS_DESCRIPTION}
  >
    <HeaderSection
      title={DIC.NAV_LABEL_TRANSPORT_ACCESS}
      subtitle={DIC.SOLUTIONS_END_TO_END_TRANSPORT_DESCRIPTION}
    />
    <Article centered>
      {DIC.SOLUTIONS_END_TO_END_TRANSPORT_CONTENT}
    </Article>
  </ViewLayout>
);

SolutionsEndToEndTransport.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_SOLUTIONS: PropTypes.string.isRequired,
    SOLUTIONS_END_TO_END_TRANSPORT_CONTENT: PropTypes.string.isRequired,
    SOLUTIONS_END_TO_END_TRANSPORT_DESCRIPTION: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(SolutionsEndToEndTransport);
