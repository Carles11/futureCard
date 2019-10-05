import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { FiTrash, FiEdit } from "react-icons/fi";

import ViewLayout from "@src/components/ViewLayout";
import HeaderSection from "@src/components/HeaderSection";
import Loader from "@src/components/Loader";
import isAdmin from "@src/hooks/isAdmin";
import { getUsers, deleteUser } from "@src/actions/admin/actionsSideEffects";
import { resetUser } from "@src/actions/admin/actions";

import Table from "@src/css/blocks/Table";
import { A, Article, Button, Grid, P, H4, Hr } from "@src/css/elements";

const COLUMNS = [
  { key: 0, label: "User name", width: 40 },
  { key: 1, label: "FullName", width: 30 },
  { key: 3, label: "Edit", width: 30 }
];

const AdminUser = ({
  token,
  users,
  count,
  message,
  handleGetUsers,
  handleRemoveUser,
  handleResetUser
}) => {
  const admin = isAdmin(token);

  useEffect(() => {
    handleResetUser();

    if (!users.length || message === "UPDATED") {
      handleGetUsers();
    }
  }, [users]);

  function removeUser(id) {
    if (id === admin.id) {
      // eslint-disable-next-line no-restricted-globals
      return alert("You cannot remove the active Admin User!");
    }

    if (
      // eslint-disable-next-line no-restricted-globals
      confirm(`${admin.username}, are you sure you wanna remove this user?`)
    ) {
      handleRemoveUser(id);
    }
  }

  return (
    <Fragment>
      {admin === null && (
        <Grid loader>
          <Loader />
        </Grid>
      )}
      {admin !== null && !admin && <Redirect to="/admin" />}
      {!!admin && (
        <ViewLayout
          title="Admin Users"
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
                  <H4 withMargin="1rem 0">{`Found ${count} Users`}</H4>
                </Grid>
                <Grid heightProp="50px">
                  <Grid withMargin="0 1rem 0 0">
                    <A role="button" to="/admin/users/new">
                      Add new User
                    </A>
                  </Grid>

                  <A role="button" to="/admin">
                    Back to Admin
                  </A>
                </Grid>
              </Grid>
            </Grid>
            <Hr invertColor />
            {users.length ? (
              <Table id="users-table" role="grid">
                <Table.Header>
                  <Table.Row header role="grid">
                    {COLUMNS.map(column => (
                      <Table.Header.Column
                        key={column.key}
                        widthProp={column.width}
                      >
                        {column.label}
                      </Table.Header.Column>
                    ))}
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {users.map(item => (
                    <Table.Row key={`row-data-${item._id}`}>
                      <Table.Column>
                        <H4 size={1.2} margin="0">
                          {item.username}
                        </H4>
                      </Table.Column>

                      <Table.Column>
                        <P small withAlign="center">
                          {`${item.firstname} ${item.lastname}`}
                        </P>
                      </Table.Column>
                      <Table.Column>
                        <Grid vertical="center">
                          <Grid>
                            <A
                              role="button"
                              invert
                              withicon="true"
                              to={`/admin/users/${item._id}`}
                            >
                              <FiEdit />
                            </A>
                          </Grid>
                          <Grid>
                            <Button invert withIcon>
                              <FiTrash onClick={() => removeUser(item._id)} />
                            </Button>
                          </Grid>
                        </Grid>
                      </Table.Column>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            ) : (
              <Grid loader>
                <Loader />
              </Grid>
            )}
          </Article>
        </ViewLayout>
      )}
    </Fragment>
  );
};

AdminUser.propTypes = {
  token: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string
    })
  ),
  message: PropTypes.string,
  count: PropTypes.number,
  handleRemoveUser: PropTypes.func.isRequired,
  handleResetUser: PropTypes.func.isRequired,
  handleGetUsers: PropTypes.func.isRequired
};

const mapStateToProps = ({ admin }) => ({
  token: admin.token,
  users: admin.users.data,
  count: admin.users.count,
  message: admin.users.message
});

const mapDispatchToProps = dispatch => ({
  handleGetUsers: () => dispatch(getUsers()),
  handleRemoveUser: id => dispatch(deleteUser(id)),
  handleResetUser: () => dispatch(resetUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminUser);
