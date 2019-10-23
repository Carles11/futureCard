import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FiTrash, FiEdit } from 'react-icons/fi';

import ViewLayout from '@src/components/ViewLayout';
import HeaderSection from '@src/components/HeaderSection';
import Loader from '@src/components/Loader';
import isAdmin from '@src/hooks/isAdmin';
import { formatDate } from '@src/utils/helpers';
import {
  getCareers,
  deleteCareer,
} from '@src/actions/admin/actionsSideEffects';
import { resetCareer } from '@src/actions/admin/actions';

import Table from '@src/css/blocks/Table';
import {
  A, Article, Button, Grid, P, H4, Hr,
} from '@src/css/elements';

const COLUMNS = [
  { key: 0, label: 'Title', width: 50 },
  { key: 1, label: 'Published at', width: 30 },
  { key: 2, label: 'Edit', width: 20 },
];

const AdminCareers = ({
  token,
  careers,
  count,
  message,
  handleGetCareers,
  handleRemoveCareer,
  handleResetCareer,
}) => {
  const admin = isAdmin(token);

  useEffect(() => {
    handleResetCareer();

    if ((!careers.length && !message) || message === 'UPDATED') {
      handleGetCareers();
    }
  }, [careers]);

  function removeCareers(id) {
    if (
      // eslint-disable-next-line no-restricted-globals
      confirm(`${admin.username}, are you sure you wanna remove this offer?`)
    ) {
      handleRemoveCareer(id);
    }
  }

  return (
    <Fragment>
      {isAdmin === null && (
        <Grid loader>
          <Loader />
        </Grid>
      )}
      {isAdmin !== null && !isAdmin && <Redirect to="/admin" />}
      {!!isAdmin && (
        <ViewLayout
          title="Admin Careers"
          description="FutureCard admin panel | Careers"
        >
          <HeaderSection
            title="Admin Careers"
            subtitle="Publish job offers and documents from FutureCards"
          />
          <Article centered>
            <Grid column>
              <Grid middle>
                <Grid flex="1">
                  <H4 withMargin="1rem 0">{`Found ${count} Offers`}</H4>
                </Grid>
                <Grid heightProp="50px">
                  <Grid withMargin="0 1rem 0 0">
                    <A role="button" to="/admin/careers/new">
                      Add new Offer
                    </A>
                  </Grid>

                  <A role="button" to="/admin">
                    Back to Admin
                  </A>
                </Grid>
              </Grid>
            </Grid>
            <Hr invertColor />
            {!careers.length && message === '' ? (
              <Grid loader>
                <Loader />
              </Grid>
            ) : null}
            {!!careers.length && !!message && (
              <Table id="careers-table" role="grid">
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
                  {careers.map(item => (
                    <Table.Row key={`row-data-${item._id}`}>
                      <Table.Column>
                        <H4 size={1.2} margin="0">
                          {item.title}
                        </H4>
                      </Table.Column>

                      <Table.Column>
                        <P small withAlign="center">
                          {formatDate(item.updatedAt)}
                        </P>
                      </Table.Column>
                      <Table.Column>
                        <Grid vertical="center">
                          <Grid>
                            <A
                              role="button"
                              invert
                              withicon="true"
                              to={`/admin/careers/${item._id}`}
                            >
                              <FiEdit />
                            </A>
                          </Grid>
                          <Grid>
                            <Button invert withIcon>
                              <FiTrash
                                onClick={() => removeCareers(item._id)}
                              />
                            </Button>
                          </Grid>
                        </Grid>
                      </Table.Column>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            )}
          </Article>
        </ViewLayout>
      )}
    </Fragment>
  );
};

AdminCareers.propTypes = {
  token: PropTypes.string.isRequired,
  careers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }),
  ),
  message: PropTypes.string,
  count: PropTypes.number,
  handleGetCareers: PropTypes.func.isRequired,
  handleRemoveCareer: PropTypes.func.isRequired,
  handleResetCareer: PropTypes.func.isRequired,
};

const mapStateToProps = ({ admin }) => ({
  token: admin.token,
  careers: admin.careers.data,
  count: admin.careers.count,
  message: admin.careers.message,
});

const mapDispatchToProps = dispatch => ({
  handleGetCareers: () => dispatch(getCareers()),
  handleRemoveCareer: id => dispatch(deleteCareer(id)),
  handleResetCareer: () => dispatch(resetCareer()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminCareers);
