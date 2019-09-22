import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';

import { Article, P } from '@src/css/elements';
import { BACKGROUND_IMG } from '@src/utils/constants';

/**
 * SolutionsCardManagementCardHolder View Component
 *
 * @param {Object} props
 * @param {Object} props.DIC
 */
const SolutionsCardManagementCardHolder = ({ DIC }) => {
  const [title, ...content] = DIC.MANAGEMENT_DESCRIPTION_CARD_HOLDER.split('.');
  return (
    <ViewLayout
      title={`${DIC.NAV_LABEL_SOLUTIONS} | ${DIC.MANAGEMENT_CARD_HOLDER}`}
      description={title}
      image={BACKGROUND_IMG.IDENTIFICATION}>
      <HeaderSection
        title={DIC.MANAGEMENT_CARD_HOLDER}
        subtitle={`${title}.`}
      />
      <Article centered>
        <P>{`${content}.`}</P>
      </Article>
    </ViewLayout>
  );
};

SolutionsCardManagementCardHolder.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_SOLUTIONS: PropTypes.string.isRequired,
    MANAGEMENT_CARD_HOLDER: PropTypes.string.isRequired,
    MANAGEMENT_DESCRIPTION_CARD_HOLDER: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(SolutionsCardManagementCardHolder);