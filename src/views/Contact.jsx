import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ContactMap from '@src/components/ContactMap';
import ContactForm from '@src/components/ContactForm';
import Footer from '@src/components/Footer';

import {
  Section, Header, H1, H2,
} from '@src/css/elements';

const Contact = ({ DIC }) => (
  <Section>
    <Helmet
      title={DIC.NAV_LABEL_CONTACT}
      meta={[
        { name: 'description', content: `${DIC.CONTACT_DECRIPTION}` },
        { property: 'og:title', content: 'Contact page of FutureCard Industries' },
      ]}
    />
    <Header onContactMap>
      <H1 sansSerif upperCase>{DIC.CONTACT_TITLE}</H1>
      <H2>{DIC.CONTACT_SUBTITLE}</H2>
    </Header>
    <ContactForm />
    <ContactMap />
    <Footer />
  </Section>
);

Contact.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_CONTACT: PropTypes.string.isRequired,
    CONTACT_TITLE: PropTypes.string.isRequired,
    CONTACT_SUBTITLE: PropTypes.string.isRequired,
    CONTACT_DESCRIPTION: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});

export default connect(
  mapStateToProps,
  null,
)(Contact);
