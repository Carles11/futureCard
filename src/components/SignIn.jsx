import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Form, Input, Label } from '@src/css/elements/form';
import { Grid, Button } from '@src/css/elements';
import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import { logIn } from '@src/actions/admin/actionsSideEffects';

const SignIn = ({ handleLogIn }) => {
  const [state, dispatch] = useReducer(reducer, {
    username: '',
    password: '',
  });

  function handleInputChange(e) {
    const { name, value } = e.target;

    dispatch({ type: 'INPUTS', name, value });
  }

  function handleOnSubmit(e) {
    e.preventDefault();

    const { username, password } = state;

    if (username && password) {
      handleLogIn({ username, password });
    }
  }
  return (
    <ViewLayout title="Sign In" description="FutureCard admin panel">
      <HeaderSection title="Sign In" subtitle="FutureCard's Admin Panel." />
      <Grid withWidth="50%" withMargin="1rem auto 3rem" vertical middle>
        <Form onSubmit={handleOnSubmit}>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            name="username"
            required
            onChange={handleInputChange}
          />
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            name="password"
            autocomplete="current-password"
            required
            onChange={handleInputChange}
          />
          <Button contact type="submit">
            Send
          </Button>
        </Form>
      </Grid>
    </ViewLayout>
  );
};

SignIn.propTypes = {
  handleLogIn: PropTypes.func.isRequired,
};

function reducer(state, action) {
  switch (action.type) {
    case 'INPUTS':
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return {
        ...state,
      };
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  handleLogIn: (username, password) => dispatch(logIn(username, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);
