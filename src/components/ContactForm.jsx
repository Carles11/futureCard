/* eslint-disable no-alert */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import HeaderSection from '@src/components';
import { Form, Input, Textarea, Label } from "@src/css/elements/form";
import { Button, H4 } from "@src/css/elements";
import { connect } from "react-redux";

import { sendEmail } from "@src/actions/contact/actionsSideEffects";

// add handleSubmit && handleChange

const ContactForm = ({ DIC, handleSendEmail, data }) => {
  const initialFormState = {
    name: "",
    email: "",
    telephone: "",
    message: "",
    sent: false,
    buttonText: `${DIC.BUTTON_SEND}`,
    subject: "New message received from www.FutureCard.com"
  };
  const [emailBody, setEmailBody] = useState(initialFormState);

  useEffect(() => {
    if (!data) {
      setEmailBody({ ...emailBody, buttonText: `${DIC.BUTTON_SEND}` });
    } else if (data) {
      // eslint-disable-next-line no-use-before-define
      setEmailBody({ ...emailBody, buttonText: `${DIC.BUTTON_SENT}` });
      setTimeout(() => {
        setEmailBody({ ...emailBody, buttonText: `${DIC.BUTTON_SEND}` });
      }, 2000);
    }
  }, [data]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setEmailBody({ ...emailBody, [id]: value });
  };
  const resetForm = () => {
    setEmailBody(initialFormState);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEmailBody({ ...emailBody, buttonText: `${DIC.BUTTON_SENDING}` });
    handleSendEmail(emailBody);
    setEmailBody({ ...emailBody, buttonText: `${DIC.BUTTON_SENT}` });
    resetForm();
  };
  return (
    <Form action="" onSubmit={handleFormSubmit} center>
      {/* <H2 secundaryColor withMargin="auto" centered>
        {DIC.CONTACT_DESCRIPTION}
      </H2>
      <H3 withMargin="1rem auto" centered>
        {DIC.CONTACT_DESCRIPTION_SUBLINE}
      </H3>
      <Hr withSize="45%" withMargin="1.3rem auto" /> */}
      <H4 centered>{DIC.CONTACT_SUBDESCRIPTION}</H4>
      <Label htmlFor="name">{DIC.CONTACT_LABEL_NAME}</Label>
      <Input id="name" type="text" required onChange={handleInputChange} />
      <Label htmlFor="email">{DIC.CONTACT_LABEL_EMAIL}</Label>
      <Input id="email" type="email" required onChange={handleInputChange} />
      <Label htmlFor="telephone">{DIC.CONTACT_LABEL_TELEPHONE}</Label>
      <Input id="telephone" type="tel" onChange={handleInputChange} />
      <Label htmlFor="message">{DIC.CONTACT_LABEL_MESSAGE}</Label>
      <Textarea
        textarea
        id="message"
        type="text-area"
        minlength="20"
        required
        onChange={handleInputChange}
      />
      <Button contact id="buttonText" type="submit">
        {emailBody.buttonText}
      </Button>
    </Form>
  );
};

ContactForm.propTypes = {
  DIC: PropTypes.shape({
    CONTACT_DESCRIPTION: PropTypes.string.isRequired,
    CONTACT_SUBDESCRIPTION: PropTypes.string.isRequired,
    CONTACT_DESCRIPTION_SUBLINE: PropTypes.string.isRequired,
    CONTACT_LABEL_NAME: PropTypes.string.isRequired,
    CONTACT_LABEL_EMAIL: PropTypes.string.isRequired,
    CONTACT_LABEL_TELEPHONE: PropTypes.string.isRequired,
    CONTACT_LABEL_MESSAGE: PropTypes.string.isRequired,
    BUTTON_SEND: PropTypes.string.isRequired,
    BUTTON_NOT_SENT: PropTypes.string.isRequired,
    BUTTON_SENDING: PropTypes.string.isRequired
  }).isRequired,
  handleSendEmail: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired
};

const mapStateToProps = ({ dictionary, contact }) => ({
  DIC: dictionary.data,
  data: contact.emailBody.data
});
const mapDispatchToProps = dispatch => ({
  handleSendEmail: emailBody => dispatch(sendEmail(emailBody))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);
