import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HeaderSection from '@src/components/HeaderSection';
import { Section, Article, P } from '@src/css/elements';
import Footer from '@src/components/Footer';
import useLocation from '@src/hooks/useLocation';

import { getLocation } from '@src/actions/location/actions';

const Services = ({ DIC, path, location, handleLocation }) => {
  useLocation(path, location, handleLocation);

  return (
    <Section>
      <Helmet
        title={DIC.NAV_LABEL_SERVICES_FULFILLMENT}
        meta={[
          {
            name: 'description',
            content: `${DIC.SERVICES_FULFILLMENT_DESCRIPTION}`,
          },
          { property: 'og:title', content: 'welcome to futurecard.com' },
        ]}
      />
      <HeaderSection
        title={DIC.SERVICES_FULFILLMENT_TITLE}
        subtitle={DIC.SERVICES_FULFILLMENT_SUBTITLE}
      />
      <Article centered>
        <P>{DIC.SERVICES_FULFILLMENT_CONTENT_0}</P>
        <P>HERE ALL OPTIONS IN TABS WITH CONTENT</P>
      </Article>

      {/* <Header left>
        <H4>{DIC.SERVICES_FULFILLMENT_CONTENT_1_TITLE}</H4>
      </Header>
      <Article centered>
        <P>{DIC.SERVICES_FULFILLMENT_CONTENT_1}</P>
      </Article>
      <Header left>
        <H4>{DIC.SERVICES_FULFILLMENT_CONTENT_2_TITLE}</H4>
      </Header>
      <Article centered>
        <P>{DIC.SERVICES_FULFILLMENT_CONTENT_2}</P>
      </Article>
      <Header left>
        <H4>{DIC.SERVICES_FULFILLMENT_CONTENT_3_TITLE}</H4>
      </Header>
      <Article centered>
        <P>{DIC.SERVICES_FULFILLMENT_CONTENT_3}</P>
      </Article>
      <Header left>
        <H4>{DIC.SERVICES_FULFILLMENT_CONTENT_4_TITLE}</H4>
      </Header>
      <Article centered>
        <P>{DIC.SERVICES_FULFILLMENT_CONTENT_4}</P>
      </Article> */}
      <Footer />
    </Section>
  );
};

Services.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_SERVICES_FULFILLMENT: PropTypes.string.isRequired,
    SERVICES_FULFILLMENT_TITLE: PropTypes.string.isRequired,
    SERVICES_FULFILLMENT_SUBTITLE: PropTypes.string.isRequired,
    SERVICES_FULFILLMENT_DESCRIPTION: PropTypes.string.isRequired,
    SERVICES_FULFILLMENT_CONTENT_0: PropTypes.string.isRequired,
    SERVICES_FULFILLMENT_CONTENT_1: PropTypes.string.isRequired,
    SERVICES_FULFILLMENT_CONTENT_1_TITLE: PropTypes.string.isRequired,
    SERVICES_FULFILLMENT_CONTENT_2: PropTypes.string.isRequired,
    SERVICES_FULFILLMENT_CONTENT_2_TITLE: PropTypes.string.isRequired,
    SERVICES_FULFILLMENT_CONTENT_3: PropTypes.string.isRequired,
    SERVICES_FULFILLMENT_CONTENT_3_TITLE: PropTypes.string.isRequired,
    SERVICES_FULFILLMENT_CONTENT_4: PropTypes.string.isRequired,
    SERVICES_FULFILLMENT_CONTENT_4_TITLE: PropTypes.string.isRequired,
  }).isRequired,
  path: PropTypes.string.isRequired,
  handleLocation: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = ({ dictionary, location }) => ({
  DIC: dictionary.data,
  path: location.path,
});

const mapDispatchToProps = dispatch => ({
  handleLocation: location => dispatch(getLocation(location)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Services);
