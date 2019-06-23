import React from 'react';

import Layout from '@src/css/blocks/Layout';

const ContactForm = () => (
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
);

export default ContactForm;
