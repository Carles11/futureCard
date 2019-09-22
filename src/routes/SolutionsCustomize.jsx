import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import { Article, P } from '@src/css/elements';

const SolutionsCustomize = ({ DIC }) => (
  <ViewLayout
    title={`${DIC.NAV_LABEL_SOLUTIONS} | ${DIC.NAV_LABEL_CUSTOMIZE}`}
    description={DIC.SOLUTIONS_END_TO_END_DESCRIPTION}>
    <HeaderSection
      title={DIC.NAV_LABEL_CUSTOMIZE}
      subtitle={DIC.SOLUTIONS_END_TO_END_DESCRIPTION}
    />
    <Article centered>
      <P></P>
    </Article>
  </ViewLayout>
);

SolutionsCustomize.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_SOLUTIONS: PropTypes.string.isRequired,
    NAV_LABEL_CUSTOMIZE: PropTypes.string.isRequired,
    SOLUTIONS_END_TO_END_DESCRIPTION: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(SolutionsCustomize);
