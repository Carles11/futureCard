/* eslint-disable no-alert */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Form, Input, Label } from '@src/css/elements/form';
import { Button } from '@src/css/elements';
import { connect } from 'react-redux';

import { sendEmail } from '@src/actions/contact/actionsSideEffects';

// add handleSubmit && handleChange

const ContactForm = ({ DIC, handleSendEmail, mailSuccess }) => {
  const initialFormState = {
    name: '',
    email: '',
    telephone: '',
    message: '',
    sent: false,
    buttonText: `${DIC.BUTTON_SEND}`,
    subject: 'New message received from www.FutureCard.com',
  };
  const [emailBody, setEmailBody] = useState(initialFormState);

  useEffect(() => {
    if (!mailSuccess) {
      setEmailBody({ ...emailBody, buttonText: `${DIC.BUTTON_NOT_SENT}` });
      alert('Please type a valid e-mail');
      // console.log('buttonText', emailBody.buttonText);
      setTimeout(() => {
        setEmailBody({ ...emailBody, buttonText: `${DIC.BUTTON_SEND}` });
      }, 2000);
    } else if (mailSuccess) {
      console.log('emailBody in FormSubmit', emailBody);
      // eslint-disable-next-line no-use-before-define
      setEmailBody({ ...emailBody, buttonText: `${DIC.BUTTON_SENT}` });
    }
  }, [mailSuccess]);

  console.log('mailSuccess', mailSuccess);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    // console.log("id", e.target.id, "value", e.target.value)
    setEmailBody({ ...emailBody, [id]: value });
    // console.log("body message", emailBody.message);
  };
  const resetForm = () => {
    setEmailBody(initialFormState);
  };

  const handleEmail = (body) => {
    handleSendEmail(body);
    setEmailBody({ ...emailBody, buttonText: `${DIC.BUTTON_SENT}` });
    console.log('body in handleMail', body);
    resetForm();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEmailBody({ ...emailBody, buttonText: `${DIC.BUTTON_SENDING}` });
    handleEmail(emailBody);
  };

  return (
    <Form
      action=""
      onSubmit={handleFormSubmit}
    >
      <Label htmlFor="name">{DIC.CONTACT_LABEL_NAME}</Label>
      <Input id="name" type="text" required onChange={handleInputChange} />
      <Label htmlFor="email">{DIC.CONTACT_LABEL_EMAIL}</Label>
      <Input id="email" type="email" required onChange={handleInputChange} />
      <Label htmlFor="telephone">{DIC.CONTACT_LABEL_TELEPHONE}</Label>
      <Input id="telephone" type="tel" onChange={handleInputChange} />
      <Label htmlFor="message">{DIC.CONTACT_LABEL_MESSAGE}</Label>
      <Input id="message" type="text-area" minlength="20" required onChange={handleInputChange} />
      <Button
        contact
        id="buttonText"
        type="submit"
      >
        {emailBody.buttonText}
      </Button>
    </Form>
  );
};

ContactForm.propTypes = {
  DIC: PropTypes.shape({
    CONTACT_LABEL_NAME: PropTypes.string.isRequired,
    CONTACT_LABEL_EMAIL: PropTypes.string.isRequired,
    CONTACT_LABEL_TELEPHONE: PropTypes.string.isRequired,
    CONTACT_LABEL_MESSAGE: PropTypes.string.isRequired,
    BUTTON_SEND: PropTypes.string.isRequired,
    BUTTON_NOT_SENT: PropTypes.string.isRequired,
    BUTTON_SENDING: PropTypes.string.isRequired,
  }).isRequired,
  handleSendEmail: PropTypes.func.isRequired,
};

const mapStateToProps = ({ dictionary, contact }) => ({
  DIC: dictionary.data,
  mailSuccess: Object.keys(contact.emailBody).length ? contact.emailBody.success : {},
});
const mapDispatchToProps = dispatch => ({
  handleSendEmail: emailBody => dispatch(sendEmail(emailBody)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactForm);
