/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import {
  Form, Button, H1, H2,
} from '@src/css/elements';

const ContactForm = ({ title, subtitle }) => (
  <Form action="">
    <div className="row">
      <H1 sansSerif upperCase>{title}</H1>
      <H2 invertColor>{subtitle}</H2>
    </div>
    <div className="row">
      <span>
        <input className="slide-up" id="name" type="text" placeholder="Your name" />
        <label htmlFor="name">Name</label>
      </span>
      <span>
        <input className="slide-up" id="email" type="text" placeholder="Email" />
        <label htmlFor="email">Email</label>
      </span>
      <span>
        <input className="slide-up" id="telephone" type="text" placeholder="Your phone" />
        <label htmlFor="telephone">Telephone (optional)</label>
      </span>
      <span>
        <input className="slide-up" id="message" type="text-area" placeholder="Your message" />
        <label htmlFor="message">Message</label>
      </span>
      <span>
        <Button>SEND</Button>
      </span>
    </div>
  </Form>
);

ContactForm.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default ContactForm;
