import React, { Fragment, useReducer } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Form, Input, Label } from '@src/css/elements/form';
import { Grid, Button } from '@src/css/elements';
import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import { logIn } from '@src/actions/admin/actionsSideEffects';

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

const Admin = ({ token, handleLogIn }) => {
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
    <Fragment>
      {token ? (
        <ViewLayout
          title="Admin Panel"
          description="Handle the dynamic content of the FutureCard's web app."
        >
          <HeaderSection
            title="Admin Panel"
            subtitle="Handle the dynamic content of the FutureCard's web app."
          />
        </ViewLayout>
      ) : (
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
      )}
    </Fragment>
  );
};

Admin.propTypes = {
  token: PropTypes.string.isRequired,
  handleLogIn: PropTypes.func.isRequired,
};

const mapStateToProps = ({ admin }) => ({
  token: admin.token,
});

const mapDispatchToProps = dispatch => ({
  handleLogIn: (username, password) => dispatch(logIn(username, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Admin);
