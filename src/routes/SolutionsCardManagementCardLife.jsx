import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FiArrowRightCircle } from 'react-icons/fi';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import Icon from '@src/components/Icon';

import {
  A, Article, Button, P,
} from '@src/css/elements';
import { BACKGROUND_IMG } from '@src/utils/constants';

/**
 * SolutionsCardManagementCardLife View Component
 *
 * @param {Object} props
 * @param {Object} props.DIC
 */
const SolutionsCardManagementCardLife = ({ DIC }) => {
  const [title, ...content] = DIC.MANAGEMENT_DESCRIPTION_CARD_LIFE_CYCLE.split(
    '.',
  );
  return (
    <ViewLayout
      title={`${DIC.NAV_LABEL_SOLUTIONS} | ${DIC.MANAGEMENT_CARD_LIFE_CYCLE}`}
      description={title}
      image={BACKGROUND_IMG.CARD_LIFE_CYCLE}
    >
      <HeaderSection
        title={DIC.MANAGEMENT_CARD_LIFE_CYCLE}
        subtitle={`${title}`}
      />
      <Article centered>
        <P>{content.join('.')}</P>
        <Button.Centered withMargin="3.3rem">
          <A role="button" to="/our-solutions/card-management-systems">
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

SolutionsCardManagementCardLife.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_SOLUTIONS: PropTypes.string.isRequired,
    MANAGEMENT_CARD_LIFE_CYCLE: PropTypes.string.isRequired,
    MANAGEMENT_DESCRIPTION_CARD_LIFE_CYCLE: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(SolutionsCardManagementCardLife);
