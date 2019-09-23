import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';

import { NAVIGATION, BACKGROUND_IMG } from '@src/utils/constants';
import Box from '@src/css/blocks/Box';
import {
  Article, P, H4, Hr,
} from '@src/css/elements';

const ServicesConsulting = ({ DIC }) => {
  const SECTIONS = NAVIGATION.find(item => item.label === 'SERVICES');
  return (
    <ViewLayout
      title={`${DIC.NAV_LABEL_SERVICES} | ${DIC.SERVICES_CONSULTING_TITLE}`}
      description={DIC.SERVICES_DESCRIPTION}
      image={BACKGROUND_IMG.CARD_CONSULTING}
    >
      <HeaderSection
        title={DIC.SERVICES_CONSULTING_TITLE}
        subtitle={DIC.SERVICES_CONSULTING_SUBTITLE}
      />
      <Article centered>
        <P>{DIC.SERVICES_CONSULTING_CONTENT_0}</P>
        <P>{DIC.SERVICES_CONSULTING_CONTENT_1}</P>
        <Box>
          {SECTIONS.child.map((section) => {
            const TITLE = `SERVICES_${section.label}_TITLE`;
            const CONTENT = `SERVICES_${section.label}_DESCRIPTION`;

            return (
              <Box.Link
                to={section.link}
                key={section.key}
                with_scale="true"
                with_background="true"
              >
                <H4 withMargin="1.5rem 0.5rem 0.5rem" centered>
                  {DIC[TITLE]}
                </H4>
                <Hr
                  withSize="80px"
                  withMargin="0 auto 1rem"
                  withAlign="center"
                />
                <P small withPadding="0 1rem 0.5rem">
                  {`${DIC[CONTENT].split('.')[0]}.`}
                </P>
              </Box.Link>
            );
          })}
        </Box>
      </Article>
    </ViewLayout>
  );
};

ServicesConsulting.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_SERVICES: PropTypes.string.isRequired,
    SERVICES_TITLE: PropTypes.string.isRequired,
    SERVICES_SUBTITLE: PropTypes.string.isRequired,
    SERVICES_DESCRIPTION: PropTypes.string.isRequired,
    SERVICES_CONSULTING_CONTENT_0: PropTypes.string.isRequired,
    SERVICES_CONSULTING_CONTENT_1: PropTypes.string.isRequired,
    SERVICES_CONSULTING_SUBTITLE: PropTypes.string.isRequired,
    SERVICES_CONSULTING_TITLE: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(ServicesConsulting);
