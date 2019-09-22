import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';

import { Article, P } from '@src/css/elements';
import { BACKGROUND_IMG } from '@src/utils/constants';

/**
 * SolutionsCardManagementCentralIssuance View Component
 *
 * @param {Object} props
 * @param {Object} props.DIC
 */
const SolutionsCardManagementCentralIssuance = ({ DIC }) => {
  const [title, ...content] = DIC.MANAGEMENT_DESCRIPTION_CENTRAL_ISSUANCE.split('.');
  return (
    <ViewLayout
      title={`${DIC.NAV_LABEL_SOLUTIONS} | ${DIC.MANAGEMENT_CENTRAL_ISSUANCE}`}
      description={title}
      image={BACKGROUND_IMG.IDENTIFICATION}
    >
      <HeaderSection
        title={DIC.MANAGEMENT_CENTRAL_ISSUANCE}
        subtitle={`${title}.`}
      />
      <Article centered>
        <P>{content.join('.')}</P>
      </Article>
    </ViewLayout>
  );
};

SolutionsCardManagementCentralIssuance.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_SOLUTIONS: PropTypes.string.isRequired,
    MANAGEMENT_CENTRAL_ISSUANCE: PropTypes.string.isRequired,
    MANAGEMENT_DESCRIPTION_CENTRAL_ISSUANCE: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(SolutionsCardManagementCentralIssuance);
