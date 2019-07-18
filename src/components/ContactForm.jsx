/* eslint-disable no-undef */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import { Form, Button } from '@src/css/elements';
import { connect } from 'react-redux';

// add handleSubmit && handleChange

const ContactForm = ({ DIC, handleSendMail }) => (
  <Form action="">
    <div className="row">
      <span>
        <input className="slide-up" id="name" type="text" required placeholder="Your name" />
        <label htmlFor="name">{DIC.CONTACT_LABEL_NAME}</label>
      </span>
      <span>
        <input className="slide-up" id="email" type="email" required pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" placeholder="Email" />
        <label htmlFor="email">{DIC.CONTACT_LABEL_EMAIL}</label>
      </span>
      <span>
        <input className="slide-up" id="telephone" type="text" placeholder="Your phone" />
        <label htmlFor="telephone">{DIC.CONTACT_LABEL_TELEPHONE}</label>
      </span>
      <span>
        <input className="slide-up" id="message" type="text-area" required placeholder="Your message" />
        <label htmlFor="message">{DIC.CONTACT_LABEL_MESSAGE}</label>
      </span>
      <span>
        <Button>{DIC.BUTTON_SEND}</Button>
      </span>
    </div>
  </Form>
);

ContactForm.propTypes = {
  DIC: PropTypes.shape({
    CONTACT_LABEL_NAME: PropTypes.string.isRequired,
    CONTACT_LABEL_EMAIL: PropTypes.string.isRequired,
    CONTACT_LABEL_TELEPHONE: PropTypes.number.isRequired,
    CONTACT_LABEL_MESSAGE: PropTypes.string.isRequired,
    BUTTON_SEND: PropTypes.string.isRequired,
  }).isRequired,
  handleSetMail: PropTypes.func.isRequired,
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data,
});
const mapDispatchToProps = dispatch => ({
  handleSendMail: body => dispatch(sendMail(body)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactForm);
