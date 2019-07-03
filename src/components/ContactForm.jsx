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

        <label htmlFor="name">
          Name
          <input className="slide-up" id="name" type="text" placeholder="Your name" />
        </label>
      </span>
      <span>

        <label htmlFor="email">
          Email
          <input className="slide-up" id="email" type="text" placeholder="Email" />
        </label>
      </span>
      <span>

        <label htmlFor="telephone">
          Telephone (optional)
          <input className="slide-up" id="telephone" type="text" placeholder="Your phone" />
        </label>
      </span>
      <span>

        <label htmlFor="message">
          Message
          <input className="slide-up" id="message" type="text-area" placeholder="Your message" />
        </label>
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
