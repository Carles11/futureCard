import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FiArrowRightCircle } from 'react-icons/fi';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import Icon from '@src/components/Icon';

import { A, Article, Button, P, Image } from '@src/css/elements';
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
        subtitle={`${title}`}
      />
      <Article centered>
        <P>{content.join('.')}</P>
        <Image
          src={IssuanceGraphic}
          withMargin='auto'
          graphics
          alt='Issuance Graphic FutureCard'
        />
        <Button.Centered withMargin='3.3rem'>
          <A role='button' to='/our-solutions/card-management-systems'>
            {`${DIC.BACK_HOME} ${DIC.NAV_LABEL_CARD_MANAGEMENT}`}
            <Icon>
              <FiArrowRightCircle />
            </Icon>
          </A>
        </Button.Centered>
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
