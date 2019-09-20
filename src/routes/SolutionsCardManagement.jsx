import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import { Article, P } from '@src/css/elements';

const SolutionsCardManagement = ({ DIC }) => (
  <ViewLayout
    title={`${DIC.NAV_LABEL_SOLUTIONS} | ${DIC.NAV_LABEL_CARD_MANAGEMENT}`}
    description={DIC.SOLUTIONS_END_TO_END_DESCRIPTION}
  >
    <HeaderSection
      title={DIC.NAV_LABEL_CARD_MANAGEMENT}
      subtitle={DIC.SOLUTIONS_END_TO_END_DESCRIPTION}
    />
    <Article centered>
      <P>HERE ALL OPTIONS IN TABS WITH CONTENT</P>
    </Article>
  </ViewLayout>
);

SolutionsCardManagement.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_SOLUTIONS: PropTypes.string.isRequired,
    NAV_LABEL_CUSTOMIZE: PropTypes.string.isRequired,
    NAV_LABEL_CARD_MANAGEMENT: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(SolutionsCardManagement);
