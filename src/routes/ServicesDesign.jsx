import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import { Article, P } from '@src/css/elements';

const ServicesDesign = ({ DIC }) => (
  <ViewLayout
    title={`${DIC.NAV_LABEL_SERVICES} | ${DIC.SERVICES_DESIGN_TITLE}`}
    description={DIC.SERVICES_DESCRIPTION}
  >
    <HeaderSection
      title={DIC.SERVICES_DESIGN_TITLE}
      subtitle={DIC.SERVICES_DESIGN_SUBTITLE}
    />
    <Article centered>
      <P>{DIC.SERVICES_DESIGN_CONTENT_0}</P>
      <P>{DIC.SERVICES_DESIGN_CONTENT_1}</P>
    </Article>
  </ViewLayout>
);

ServicesDesign.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_SERVICES: PropTypes.string.isRequired,
    SERVICES_TITLE: PropTypes.string.isRequired,
    SERVICES_SUBTITLE: PropTypes.string.isRequired,
    SERVICES_DESCRIPTION: PropTypes.string.isRequired,
    SERVICES_DESIGN_CONTENT_0: PropTypes.string.isRequired,
    SERVICES_DESIGN_CONTENT_1: PropTypes.string.isRequired,
    SERVICES_DESIGN_SUBTITLE: PropTypes.string.isRequired,
    SERVICES_DESIGN_TITLE: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(ServicesDesign);
