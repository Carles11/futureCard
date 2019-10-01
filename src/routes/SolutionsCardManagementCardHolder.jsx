import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FiArrowRightCircle } from 'react-icons/fi';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import Icon from '@src/components/Icon';

import { A, Article, Button, P } from '@src/css/elements';
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
      image={BACKGROUND_IMG.CARD_HOLDER}>
      <HeaderSection title={DIC.MANAGEMENT_CARD_HOLDER} subtitle={`${title}`} />
      <Article centered>
        <P>{content.join('.')}</P>
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
