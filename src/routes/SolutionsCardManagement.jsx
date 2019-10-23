import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import { BACKGROUND_IMG } from '@src/utils/constants';

import Box from '@src/css/blocks/Box';
import {
  Article, P, H4, Hr, Grid, Image,
} from '@src/css/elements';

import CARDHOLDER from '@src/assets/CMS_icons/cardholder-icon.png';
import CARDLIFECYCLE from '@src/assets/CMS_icons/cardlifecycle-icon.png';
import CENTRALISSUANCE from '@src/assets/CMS_icons/centralIssuance-icon.png';
import INSTANTISSUANCE from '@src/assets/CMS_icons/instantIssuance-icon.png';

const SECTIONS = [
  {
    id: 1,
    title: 'CENTRAL_ISSUANCE',
    link: '/our-solutions/card-management-systems/central-issuance',
    icon: CENTRALISSUANCE,
  },
  {
    id: 2,
    title: 'INSTANT_ISSUANCE',
    link: '/our-solutions/card-management-systems/instant-issuance',
    icon: INSTANTISSUANCE,
  },
  {
    id: 3,
    title: 'CARD_HOLDER',
    link: '/our-solutions/card-management-systems/cardholder-enrollment-system',
    icon: CARDHOLDER,
  },
  {
    id: 4,
    title: 'CARD_LIFE_CYCLE',
    link: '/our-solutions/card-management-systems/card-life-cycle-management',
    icon: CARDLIFECYCLE,
  },
];

const style = {
  height: 'auto',
  width: '75px',
  margin: '20px',
};
const SolutionsCardManagement = ({ DIC }) => (
  <ViewLayout
    title={`${DIC.NAV_LABEL_SOLUTIONS} | ${DIC.NAV_LABEL_CARD_MANAGEMENT}`}
    description={DIC.SOLUTIONS_END_TO_END_DESCRIPTION}
    image={BACKGROUND_IMG.CARD_MANAGEMENT}
  >
    <HeaderSection
      title={DIC.NAV_LABEL_CARD_MANAGEMENT}
      subtitle={DIC.SOLUTIONS_CARD_MANAGEMENT_DESCRIPTION}
    />
    <Article centered>
      <P>{DIC.SOLUTIONS_CARD_MANAGEMENT_CONTENT}</P>
      <Box>
        {SECTIONS.map((section) => {
          const TITLE = `MANAGEMENT_${section.title}`;
          const CONTENT = `MANAGEMENT_DESCRIPTION_${section.title}`;

          return (
            <Box.Link
              to={section.link}
              key={section.id}
              with_scale="true"
              with_background="true"
            >
              <Grid
                withIcon
                withPadding="2rem 2rem 1rem"
                flex={1}
                vertical="center"
              >
                <Image style={style} logosAdapt src={section.icon} />
              </Grid>
              <H4 withMargin="0.5rem" centered>
                {DIC[TITLE]}
              </H4>
              <Hr withSize="80px" withMargin="0 auto 1rem" withAlign="center" />
              <P small withPadding="0 1rem 0.5rem">
                {`${DIC[CONTENT].split('.')[1]}`}
              </P>
            </Box.Link>
          );
        })}
      </Box>
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
    SOLUTIONS_END_TO_END_DESCRIPTION: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(SolutionsCardManagement);
