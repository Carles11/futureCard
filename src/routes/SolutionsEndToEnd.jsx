import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';

import Box from '@src/css/blocks/Box';
import {
  Article, P, H4, Hr, Grid, Image,
} from '@src/css/elements';
import SolutionsEndGraphic from '@src/assets/image/graphics/Solutions_End-to-End.png';
import { BACKGROUND_IMG } from '@src/utils/constants';
import PAYMENT from '@src/assets/icons/futurecard-payment.png';
import IDENTIFICATION from '@src/assets/icons/futurecard-identification.png';
import TRANSPORT_ACCESS from '@src/assets/icons/futurecard-transport2.png';
import TELECOM from '@src/assets/icons/futurecard-telecom.png';
import LOYALTY_RETAIL from '@src/assets/icons/futurecard-loyalty-retail.png';

const SECTIONS = [
  {
    id: 1,
    title: 'PAYMENT',
    link: '/our-solutions/end-to-end-card-solutions/payment',
    icon: PAYMENT,
  },
  {
    id: 2,
    title: 'IDENTIFICATION',
    link: '/our-solutions/end-to-end-card-solutions/identification',
    icon: IDENTIFICATION,
  },
  {
    id: 3,
    title: 'TRANSPORT_ACCESS',
    link: '/our-solutions/end-to-end-card-solutions/transport-and-access',
    icon: TRANSPORT_ACCESS,
  },
  {
    id: 4,
    title: 'TELECOM',
    link: '/our-solutions/end-to-end-card-solutions/telecom',
    icon: TELECOM,
  },
  {
    id: 5,
    title: 'LOYALTY_RETAIL',
    link: '/our-solutions/end-to-end-card-solutions/retail_loyalty',
    icon: LOYALTY_RETAIL,
  },
];

const SolutionsEndToEnd = ({ DIC }) => {
  const [title, ...first] = DIC.SOLUTIONS_END_TO_END_CONTENT.split('.');
  const [para1, para2, ...second] = first;

  return (
    <ViewLayout
      title={`${DIC.NAV_LABEL_SOLUTIONS} | ${DIC.NAV_LABEL_END_TO_END}`}
      description={DIC.SOLUTIONS_END_TO_END_DESCRIPTION}
      image={BACKGROUND_IMG.END_TO_END}
    >
      <HeaderSection
        title={DIC.NAV_LABEL_END_TO_END}
        subtitle={DIC.SOLUTIONS_END_TO_END_DESCRIPTION}
      />
      <Article centered>
        <P>{`${title}. ${para1}. ${para2}.`}</P>
        <P>{`${second}`}</P>

        <Image
          src={SolutionsEndGraphic}
          withMargin="auto"
          graphics
          alt="Solutions EndtoEnd Graphic FutureCard"
        />
        <Box>
          {SECTIONS.map((section) => {
            const TITLE = `MARKETS_${section.title}`;
            const CONTENT = `MARKETS_DESCRIPTION_${section.title}`;

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
                  <Image src={section.icon} />
                </Grid>
                <H4 withMargin="0.5rem" centered>
                  {DIC[TITLE]}
                </H4>
                <Hr
                  withSize="80px"
                  withMargin="0 auto 1rem"
                  withAlign="center"
                />
                <P small withPadding="0 1rem 0.5rem">
                  {DIC[CONTENT]}
                </P>
              </Box.Link>
            );
          })}
        </Box>
      </Article>
    </ViewLayout>
  );
};

SolutionsEndToEnd.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_SOLUTIONS: PropTypes.string.isRequired,
    NAV_LABEL_END_TO_END: PropTypes.string.isRequired,
    SOLUTIONS_END_TO_END_DESCRIPTION: PropTypes.string.isRequired,
    SOLUTIONS_END_TO_END_CONTENT: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(SolutionsEndToEnd);
