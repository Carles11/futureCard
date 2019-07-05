/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import {
  Form, Button,
} from '@src/css/elements';

const ContactForm = () => (
  <Form action="">
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
        <label htmlFor="telephone">
          Telephone
          {' '}
          <i>(optional)</i>
        </label>
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

export default ContactForm;
