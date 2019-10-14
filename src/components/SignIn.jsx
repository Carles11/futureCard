import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Form, Input, Label } from '@src/css/elements/form';
import {
  Grid, Button, H2, H3, Hr,
} from '@src/css/elements';
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
    <Grid column vertical="center" middle heightProp="100vh">
      <H2 secundaryColor withMargin="1rem 0 0.75rem" withAlign="center">
        Sign in
      </H2>

      <H3 withMargin="0" centered tiny>
        FutureCard&apos;s Admin Panel.
      </H3>
      <Hr withMargin="1.5rem 0 2rem" withAlign="center" withSize="180px" />
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
    </Grid>
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
