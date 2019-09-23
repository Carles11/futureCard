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

const ServicesPersonalization = ({ DIC }) => {
  const [title, ...content] = DIC.SERVICES_PERSONALIZATION_CONTENT.split('.');
  const SECTIONS = NAVIGATION.find(item => item.label === 'SERVICES');
  return (
    <ViewLayout
      title={`${DIC.NAV_LABEL_SERVICES} | ${DIC.NAV_LABEL_SERVICES_PERSONALIZATION}`}
      description={`${title}.`}
      image={BACKGROUND_IMG.CARD_PERSONALIZATION}
    >
      <HeaderSection
        title={DIC.SERVICES_PERSONALIZATION_TITLE}
        subtitle={DIC.SERVICES_PERSONALIZATION_SUBTITLE}
      />
      <Article centered>
        <P>{content.join('.')}</P>
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

ServicesPersonalization.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_PERSONALIZATION: PropTypes.string.isRequired,
    SERVICES_PERSONALIZATION_CONTENT: PropTypes.string.isRequired,
    SERVICES_PERSONALIZATION_DESCRIPTION: PropTypes.string.isRequired,
    SERVICES_PERSONALIZATION_SUBTITLE: PropTypes.string.isRequired,
    SERVICES_PERSONALIZATION_TITLE: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(ServicesPersonalization);
