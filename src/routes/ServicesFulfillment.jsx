import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import { Article, P } from '@src/css/elements';

const ServicesFulfillment = ({ DIC }) => (
  <ViewLayout
    title={`${DIC.NAV_LABEL_SERVICES} | ${DIC.NAV_LABEL_SERVICES_FULFILLMENT}`}
    description={DIC.SERVICES_FULFILLMENT_DESCRIPTION}
  >
    <HeaderSection
      title={DIC.SERVICES_FULFILLMENT_TITLE}
      subtitle={DIC.SERVICES_FULFILLMENT_SUBTITLE}
    />
    <Article centered>
      <P>{DIC.SERVICES_FULFILLMENT_CONTENT_0}</P>
      <P>HERE ALL OPTIONS IN TABS WITH CONTENT</P>
    </Article>
  </ViewLayout>
);

ServicesFulfillment.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_SERVICES_FULFILLMENT: PropTypes.string.isRequired,
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
