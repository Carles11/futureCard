import React, { Fragment, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import Loader from '@src/components/Loader';
import {
  A, Article, Grid, Button, H4, Hr,
} from '@src/css/elements';
import { Form, Input, Label } from '@src/css/elements/form';
import isAdmin from '@src/hooks/isAdmin';

import {
  getUser,
  createUser,
  updateUser,
} from '@src/actions/admin/actionsSideEffects';

const INITIAL_STATE = {
  username: '',
  firstname: '',
  lastname: '',
  password: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'INPUT':
      return {
        ...state,
        [action.name]: action.value,
      };
    case 'ALL':
      return {
        ...state,
        firstname: action.firstname,
        lastname: action.lastname,
        username: action.username,
      };
    case 'REDIRECT':
      return {
        ...state,
        redirect: action.redirect,
      };
    default:
      return {
        ...state,
      };
  }
}

const AdminEditUser = ({
  token,
  match,
  user,
  message,
  handleGetUser,
  handleCreateUser,
  handleUpdateUser,
}) => {
  const admin = isAdmin(token);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  /**
   * Get User if Edit Mode
   * */
  useEffect(() => {
    const { id } = match.params;

    if (id && id !== 'new') {
      handleGetUser(id);
    }
  }, [match]);

  /**
   * Update state with User date if Edit Mode
   * */
  useEffect(() => {
    const { username = '', firstname = '', lastname = '' } = user;
    dispatch({
      type: 'ALL',
      username,
      firstname,
      lastname,
    });
  }, [user]);

  /**
   * Redirect to User List when User is Created/Updated
   * */
  useEffect(() => {
    if (message === 'UPDATED') {
      dispatch({ type: 'REDIRECT', redirect: true });
    }
  }, [message]);

  function handleOnSubmit(e) {
    e.preventDefault();

    const body = Object.assign({}, state, {
      creator: admin.id,
    });

    if (Object.keys(user).length && user._id) {
      const { password, ...rest } = body;
      handleUpdateUser(user._id, rest);
    } else {
      handleCreateUser(body);
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    dispatch({ type: 'INPUT', name, value });
  }

  return (
    <Fragment>
      {admin === null && (
        <Grid loader>
          <Loader />
        </Grid>
      )}
      {state.redirect && <Redirect to="/admin/users" />}
      {admin !== null && !admin && <Redirect to="/admin" />}
      {admin && (
        <ViewLayout
          title="Edit User"
          description="FutureCard admin panel | Users"
        >
          <HeaderSection
            title="Admin Users"
            subtitle="Handle the users whom have access to edit the FutureCard's dynamic content."
          />
          <Article centered>
            <Grid column>
              <Grid middle>
                <Grid flex="1">
                  <H4 withMargin="1rem 0">
                    {Object.keys(user).length
                      ? 'Update User'
                      : 'Create New User'}
                  </H4>
                </Grid>
                <Grid heightProp="50px">
                  <A role="button" to="/admin/users">
                    Back to Users List
                  </A>
                </Grid>
              </Grid>
            </Grid>
            <Hr invertColor />

            <Grid withWidth="50%" withMargin="1rem auto 3rem" vertical middle>
              <Form onSubmit={handleOnSubmit}>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  name="username"
                  required
                  defaultValue={state.username}
                  onChange={handleInputChange}
                />
                <Label htmlFor="firstname">First name</Label>
                <Input
                  id="firstname"
                  type="text"
                  name="firstname"
                  required
                  defaultValue={state.firstname}
                  onChange={handleInputChange}
                />
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  id="lastname"
                  type="text"
                  name="lastname"
                  defaultValue={state.lastname}
                  required
                  onChange={handleInputChange}
                />
                {!Object.keys(user).length && (
                  <Fragment>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      name="password"
                      defaultValue=""
                      onChange={handleInputChange}
                    />
                  </Fragment>
                )}
                <Button contact type="submit">
                  {!!Object.keys(user).length && user._id ? 'Update' : 'Create'}
                </Button>
              </Form>
            </Grid>
          </Article>
        </ViewLayout>
      )}
    </Fragment>
  );
};

AdminEditUser.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  token: PropTypes.string.isRequired,
  user: PropTypes.shape({
    _id: PropTypes.string,
    username: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
  }),
  message: PropTypes.string,
  handleGetUser: PropTypes.func.isRequired,
  handleCreateUser: PropTypes.func.isRequired,
  handleUpdateUser: PropTypes.func.isRequired,
};

const mapStateToProps = ({ admin }) => ({
  token: admin.token,
  user: admin.users.itemSelected,
  message: admin.users.message,
});

const mapDispatchToProps = dispatch => ({
  handleGetUser: id => dispatch(getUser(id)),
  handleCreateUser: body => dispatch(createUser(body)),
  handleUpdateUser: (id, body) => dispatch(updateUser(id, body)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminEditUser);
