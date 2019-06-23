import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Section } from '@src/css/elements';
import Layout from '@src/css/blocks/Layout';
import ContactForm from '@src/components/ContactForm';

const Contact = ({ dictionary }) => {
  const { data: DIC } = dictionary;
  return (
    <Section>
      <Layout.InternPage>
        <h1>{DIC.CONTACT_TITLE}</h1>
        <h3>{DIC.CONTACT_SUBTITLE}</h3>
        <Layout.ContactBG>
          <ContactForm />
          <Layout.ContactForm.LocationBar>
            <Layout.ContactForm.LocationItem>SPAIN</Layout.ContactForm.LocationItem>
            <Layout.ContactForm.LocationItem>FRANCE</Layout.ContactForm.LocationItem>
            <Layout.ContactForm.LocationItem>UAE</Layout.ContactForm.LocationItem>
            <Layout.ContactForm.LocationItem>SOUTH-AMERICA</Layout.ContactForm.LocationItem>
          </Layout.ContactForm.LocationBar>
        </Layout.ContactBG>
      </Layout.InternPage>
    </Section>
  );
};

Contact.propTypes = {
  dictionary: PropTypes.shape({ data: PropTypes.object.isRequired }).isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  dictionary,
});

export default connect(
  mapStateToProps,
  null,
)(Contact);
