import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HeaderSection from '@src/components/HeaderSection';
import ContactMap from '@src/components/ContactMap';
// import ContactForm from '@src/components/ContactForm';
import Footer from '@src/components/Footer';

import {
  Section, Article,
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
    <HeaderSection title={DIC.CONTACT_TITLE} subtitle={DIC.CONTACT_SUBTITLE} />
    <ContactMap />
    <Article centered>
      {/* <ContactForm /> */}
    </Article>
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
