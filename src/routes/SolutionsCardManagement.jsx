import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import { Article } from '@src/css/elements';

const SolutionsCardManagement = ({ DIC }) => (
  <ViewLayout
    title={`${DIC.NAV_LABEL_SOLUTIONS} | ${DIC.NAV_LABEL_CARD_MANAGEMENT}`}
    description={DIC.SOLUTIONS_END_TO_END_DESCRIPTION}
  >
    <HeaderSection
      title={DIC.NAV_LABEL_CARD_MANAGEMENT}
      subtitle={DIC.SOLUTIONS_CARD_MANAGEMENT_DESCRIPTION}
    />
    <Article centered>
      {DIC.SOLUTIONS_CARD_MANAGEMENT_CONTENT}
    </Article>
  </ViewLayout>
);

SolutionsCardManagement.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_SOLUTIONS: PropTypes.string.isRequired,
    NAV_LABEL_CUSTOMIZE: PropTypes.string.isRequired,
    NAV_LABEL_CARD_MANAGEMENT: PropTypes.string.isRequired,
    SOLUTIONS_CARD_MANAGEMENT_DESCRIPTION: PropTypes.string.isRequired,
    SOLUTIONS_CARD_MANAGEMENT_CONTENT: PropTypes.string.isRequired,

  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(SolutionsCardManagement);
