import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FiArrowRightCircle } from 'react-icons/fi';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';

import {
  A, Article, Button, P,
} from '@src/css/elements';
import { BACKGROUND_IMG } from '@src/utils/constants';
import Icon from '@src/components/Icon';
/**
 * SolutionsCardManagementCentralIssuance View Component
 *
 * @param {Object} props
 * @param {Object} props.DIC
 */
const SolutionsCardManagementCentralIssuance = ({ DIC }) => {
  const [title, ...first] = DIC.MANAGEMENT_DESCRIPTION_CENTRAL_ISSUANCE.split(
    '.',
  );
  const [para1, para2, ...second] = first;
  const [para3, para4, ...third] = second;
  const [para5, para6] = third;

  return (
    <ViewLayout
      title={`${DIC.NAV_LABEL_SOLUTIONS} | ${DIC.MANAGEMENT_CENTRAL_ISSUANCE}`}
      description={title}
      image={BACKGROUND_IMG.CENTRAL_ISSUANCE}
    >
      <HeaderSection
        title={DIC.MANAGEMENT_CENTRAL_ISSUANCE}
        subtitle={`${title}`}
      />
      <Article centered>
        <P>{`${para1}. ${para2}. ${para3}. ${para4}.`}</P>
        <P>{`${para5}. ${para6}.`}</P>

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

SolutionsCardManagementCentralIssuance.propTypes = {
  DIC: PropTypes.shape({
    BACK_HOME: PropTypes.string.isRequired,
    NAV_LABEL_CARD_MANAGEMENT: PropTypes.string.isRequired,
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
