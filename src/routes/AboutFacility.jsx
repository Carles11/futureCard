import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';

import { Article, P } from '@src/css/elements';

const AboutFacility = ({ DIC }) => (
  <ViewLayout
    title={`${DIC.NAV_LABEL_ABOUT} | ${DIC.NAV_LABEL_OUR_FACILITY}`}
    description={DIC.ABOUT_US_DESCRIPTION}
  >
    <HeaderSection
      title={DIC.NAV_LABEL_OUR_FACILITY}
      subtitle={DIC.ABOUT_OUR_FACILITY}
    />
    <Article centered>
      <P>{DIC.ABOUT_US_FACILITY_CONTENT}</P>
      <P>{DIC.ABOUT_US_FACILITY_CONTENT_1}</P>
      <ul>
        <li>
A cutting-edge factory, where all our Smart Cards, Plastic Cards as well as Paper and
          Cardboard Cards are being produced
          {' '}
        </li>
        <li>An in-house design department that designs aesthetically appealing cards</li>
        <li>Job engineering departments to produce cards using the latest techniques </li>
        <li>
Quality Assurance Laboratory that carries out routine and qualification checks on all products
        </li>
        <li>Customized fulfillment packaging tailored to customers’ needs </li>
        <li>
An efficient logistics team that delivers all cards swiftly and securely
        </li>
      </ul>
    </Article>
  </ViewLayout>
);

AboutFacility.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_ABOUT: PropTypes.string.isRequired,
    NAV_LABEL_OUR_FACILITY: PropTypes.string.isRequired,
    ABOUT_WHO_WE_ARE: PropTypes.string.isRequired,
    ABOUT_US_DESCRIPTION: PropTypes.string.isRequired,
    ABOUT_US_FACILITY_CONTENT: PropTypes.string.isRequired,
    ABOUT_US_FACILITY_CONTENT_1: PropTypes.string.isRequired,
    ABOUT_US_FACILITY_CONTENT_2: PropTypes.string.isRequired,
    ABOUT_OUR_FACILITY: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(AboutFacility);
