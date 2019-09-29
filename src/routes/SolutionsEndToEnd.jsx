import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import {
  FaUniversity,
  FaMoneyBillAlt,
  FaMobileAlt,
  FaUsers,
} from 'react-icons/fa';

import Box from '@src/css/blocks/Box';
import { Article, P, H4, Hr, Grid, Image } from '@src/css/elements';
import SolutionsEndGraphic from '@src/assets/image/graphics/Solutions_End-to-End.png';

const SECTIONS = [
  {
    id: 1,
    title: 'PAYMENT',
    link: '/our-solutions/end-to-end-card-solutions/payment',
    icon: <FaUniversity />,
  },
  {
    id: 2,
    title: 'IDENTIFICATION',
    link: '/our-solutions/end-to-end-card-solutions/identification',
    icon: <FaMoneyBillAlt />,
  },
  {
    id: 3,
    title: 'TRANSPORT_ACCESS',
    link: '/our-solutions/end-to-end-card-solutions/transport-and-access',
    icon: <FaMobileAlt />,
  },
  {
    id: 4,
    title: 'TELECOM',
    link: '/our-solutions/end-to-end-card-solutions/telecom',
    icon: <FaUsers />,
  },
  {
    id: 5,
    title: 'LOYALTY_RETAIL',
    link: '/our-solutions/end-to-end-card-solutions/retail_loyalty',
    icon: <FaMoneyBillAlt />,
  },
];

const SolutionsEndToEnd = ({ DIC }) => (
  <ViewLayout
    title={`${DIC.NAV_LABEL_SOLUTIONS} | ${DIC.NAV_LABEL_END_TO_END}`}
    description={DIC.SOLUTIONS_END_TO_END_DESCRIPTION}>
    <HeaderSection
      title={DIC.NAV_LABEL_END_TO_END}
      subtitle={DIC.SOLUTIONS_END_TO_END_DESCRIPTION}
    />
    <Article centered>
      <P>{DIC.SOLUTIONS_END_TO_END_CONTENT}</P>
      <Image
        src={SolutionsEndGraphic}
        withMargin='auto'
        alt='Solutions EndtoEnd Graphic FutureCard'
      />
      <Box>
        {SECTIONS.map(section => {
          const TITLE = `MARKETS_${section.title}`;
          const CONTENT = `MARKETS_DESCRIPTION_${section.title}`;

          return (
            <Box.Link
              to={section.link}
              key={section.id}
              with_scale='true'
              with_background='true'>
              <Grid
                withIcon
                withPadding='2rem 2rem 1rem'
                flex={1}
                vertical='center'>
                {section.icon}
              </Grid>
              <H4 withMargin='0.5rem' centered>
                {DIC[TITLE]}
              </H4>
              <Hr withSize='80px' withMargin='0 auto 1rem' withAlign='center' />
              <P small withPadding='0 1rem 0.5rem'>
                {DIC[CONTENT]}
              </P>
            </Box.Link>
          );
        })}
      </Box>
    </Article>
  </ViewLayout>
);

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
