import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Form from '@src/components/ContactForm';
import ContactMap from '@src/components/ContactMap';
import { Section } from '@src/css/elements';

// MADRID:                          40°25′    N, 03°42′      E
// PARIS:                           48°51′    N, 02°21′      O
// JOHANNESBURG:                    26°12′16″ S, 28°02′44″   E
// DUBAI:                           25°15′47″ N, 55°17′50″   E

const Contact = ({ DIC }) => (
  <Section>
    <Helmet
      title={DIC.NAV_LABEL_CONTACT}
      meta={[
        { name: 'description', content: `${DIC.CONTACT_DECRIPTION}` },
        { property: 'og:title', content: 'Contact page of FutureCard Industries' },
      ]}
    />

    <Form title={DIC.CONTACT_TITLE} subtitle={DIC.CONTACT_SUBTITLE} />
    <ContactMap />
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
