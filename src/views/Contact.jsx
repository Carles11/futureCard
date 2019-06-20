import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Section } from '@src/css/elements';
import Layout from '@src/css/blocks/Layout';

const Contact = ({ dictionary }) => {
  const { data: DIC } = dictionary;
  return (
    <Section>
      <Layout.InternPage>
        <h1>{DIC.CONTACT_TITLE}</h1>
        <h3>{DIC.CONTACT_SUBTITLE}</h3>
        <Layout.ContactBG>
          <Layout.ContactForm>
            <Layout.ContactForm.Label>Subject</Layout.ContactForm.Label>
            <Layout.ContactForm.Input type="text" />
            <Layout.ContactForm.Label>Message</Layout.ContactForm.Label>
            <Layout.ContactForm.TextArea type="text-area" />
            <Layout.ContactForm.Label>Name</Layout.ContactForm.Label>
            <Layout.ContactForm.Input type="text" />
            <Layout.ContactForm.Label>E-mail</Layout.ContactForm.Label>
            <Layout.ContactForm.Input type="email" />
            <Layout.ContactForm.Label>Telephone (optional)</Layout.ContactForm.Label>
            <Layout.ContactForm.Input type="number" />
            <Layout.ContactForm.Button type="submit">SEND</Layout.ContactForm.Button>
          </Layout.ContactForm>
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
