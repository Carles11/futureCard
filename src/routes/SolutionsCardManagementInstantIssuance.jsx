import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';

import { Article, P, Image } from '@src/css/elements';
import { BACKGROUND_IMG } from '@src/utils/constants';
import IssuanceGraphic from '@src/assets/image/graphics/Instant_Issuance.png';

/**
 * SolutionsCardManagementInstantIssuance View Component
 *
 * @param {Object} props
 * @param {Object} props.DIC
 */
const SolutionsCardManagementInstantIssuance = ({ DIC }) => {
  const [title, ...content] = DIC.MANAGEMENT_DESCRIPTION_INSTANT_ISSUANCE.split(
    '.',
  );
  return (
    <ViewLayout
      title={`${DIC.NAV_LABEL_SOLUTIONS} | ${DIC.MANAGEMENT_INSTANT_ISSUANCE}`}
      description={title}
      image={BACKGROUND_IMG.INSTANT_ISSUANCE}>
      <HeaderSection
        title={DIC.MANAGEMENT_INSTANT_ISSUANCE}
        subtitle={`${title}.`}
      />
      <Article centered>
        <P>{content.join('.')}</P>
        <Image
          src={IssuanceGraphic}
          withMargin='auto'
          graphics
          alt='Issuance Graphic FutureCard'
        />
      </Article>
    </ViewLayout>
  );
};

SolutionsCardManagementInstantIssuance.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_SOLUTIONS: PropTypes.string.isRequired,
    MANAGEMENT_INSTANT_ISSUANCE: PropTypes.string.isRequired,
    MANAGEMENT_DESCRIPTION_INSTANT_ISSUANCE: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(SolutionsCardManagementInstantIssuance);
