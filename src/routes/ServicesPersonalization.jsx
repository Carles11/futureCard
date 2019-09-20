import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import { Article, P } from '@src/css/elements';

const ServicesPersonalization = ({ DIC }) => (
  <ViewLayout
    title={`${DIC.NAV_LABEL_SERVICES} | ${DIC.NAV_LABEL_SERVICES_PERSONALIZATION}`}
    description={DIC.SERVICES_DESCRIPTION}
  >
    <HeaderSection
      title={DIC.SERVICES_PERSONALIZATION_TITLE}
      subtitle={DIC.SERVICES_PERSONALIZATION_SUBTITLE}
    />
    <Article centered>
      <P>{DIC.SERVICES_PERSONALIZATION_CONTENT_0}</P>
      <P>
        HERE ALL OPTIONS IN TABS WITH CONTENT, comming on the next batch when
        complete content arrives
      </P>
    </Article>
  </ViewLayout>
);

ServicesPersonalization.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_SERVICES_PERSONALIZATION: PropTypes.string.isRequired,
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
