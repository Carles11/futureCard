import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FiArrowRightCircle } from 'react-icons/fi';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import { NAVIGATION, BACKGROUND_IMG } from '@src/utils/constants';
import Icon from '@src/components/Icon';

import Box from '@src/css/blocks/Box';
import { Article, A, Button, P, H4, Hr } from '@src/css/elements';

const ServicesFulfillment = ({ DIC }) => {
  const SECTIONS = NAVIGATION.find(item => item.label === 'SERVICES');
  return (
    <ViewLayout
      title={`${DIC.NAV_LABEL_SERVICES} | ${DIC.NAV_LABEL_SERVICES_FULFILLMENT}`}
      description={DIC.SERVICES_FULFILLMENT_DESCRIPTION}
      image={BACKGROUND_IMG.ABOUT_FACILITY}>
      <HeaderSection
        title={DIC.SERVICES_FULFILLMENT_TITLE}
        subtitle={DIC.SERVICES_FULFILLMENT_SUBTITLE}
      />
      <Article centered>
        <P>{DIC.SERVICES_FULFILLMENT_CONTENT_0}</P>
        <Box>
          {SECTIONS.child.map(section => {
            const TITLE = `SERVICES_${section.label}_TITLE`;
            const CONTENT = `SERVICES_${section.label}_DESCRIPTION`;

            return (
              <Box.Link
                to={section.link}
                key={section.key}
                with_scale='true'
                with_background='true'>
                <H4 withMargin='1.5rem 0.5rem 0.5rem' centered>
                  {DIC[TITLE]}
                </H4>
                <Hr
                  withSize='80px'
                  withMargin='0 auto 1rem'
                  withAlign='center'
                />
                <P small withPadding='0 1rem 0.5rem'>
                  {`${DIC[CONTENT].split('.')[0]}.`}
                </P>
              </Box.Link>
            );
          })}
        </Box>
      </Article>
      <Button.Centered>
        <A role='button' to='/our-services/'>
          {`${DIC.BACK_HOME} ${DIC.NAV_LABEL_SERVICES}`}
          <Icon>
            <FiArrowRightCircle />
          </Icon>
        </A>
      </Button.Centered>
    </ViewLayout>
  );
};

ServicesFulfillment.propTypes = {
  DIC: PropTypes.shape({
    BACK_HOME: PropTypes.string.isRequired,
    NAV_LABEL_SERVICES: PropTypes.string.isRequired,
    NAV_LABEL_FULFILLMENT: PropTypes.string.isRequired,
    SERVICES_FULFILLMENT_TITLE: PropTypes.string.isRequired,
    SERVICES_FULFILLMENT_SUBTITLE: PropTypes.string.isRequired,
    SERVICES_FULFILLMENT_DESCRIPTION: PropTypes.string.isRequired,
    SERVICES_FULFILLMENT_CONTENT_0: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(ServicesFulfillment);
