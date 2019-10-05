import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { FiTrash, FiEdit } from "react-icons/fi";

import ViewLayout from "@src/components/ViewLayout";
import HeaderSection from "@src/components/HeaderSection";
import Loader from "@src/components/Loader";
import isAdmin from "@src/hooks/isAdmin";
import { formatDate } from "@src/utils/helpers";
import { getNews, deleteNews } from "@src/actions/admin/actionsSideEffects";
import { resetOneNews } from "@src/actions/admin/actions";

import Table from "@src/css/blocks/Table";
import { A, Article, Button, Grid, P, H4, Hr } from "@src/css/elements";

const COLUMNS = [
  { key: 0, label: "Title", width: 50 },
  { key: 1, label: "Published at", width: 30 },
  { key: 2, label: "Edit", width: 20 }
];

const AdminNews = ({
  token,
  news,
  count,
  message,
  handleGetNews,
  handleRemoveNews,
  handleResetNews
}) => {
  const admin = isAdmin(token);

  useEffect(() => {
    handleResetNews();

    if ((!news.length && !message) || message === "UPDATED") {
      handleGetNews();
    }
  }, [news]);

  function removeNews(id) {
    if (
      // eslint-disable-next-line no-restricted-globals
      confirm(`${admin.username}, are you sure you wanna remove this news?`)
    ) {
      handleRemoveNews(id);
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
          title="Admin News"
          description="FutureCard admin panel | News"
        >
          <HeaderSection
            title="Admin News"
            subtitle="Create and edit the latest news of FutureCard"
          />
          <Article centered>
            <Grid column>
              <Grid middle>
                <Grid flex="1">
                  <H4 withMargin="1rem 0">{`Found ${count} News`}</H4>
                </Grid>
                <Grid heightProp="50px">
                  <Grid withMargin="0 1rem 0 0">
                    <A role="button" to="/admin/news/new">
                      Add new News
                    </A>
                  </Grid>

                  <A role="button" to="/admin">
                    Back to Admin
                  </A>
                </Grid>
              </Grid>
            </Grid>
            <Hr invertColor />
            {!news.length && message === "" ? (
              <Grid loader>
                <Loader />
              </Grid>
            ) : null}
            {!!news.length && message && (
              <Table id="news-table" role="grid">
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
                  {news.map(item => (
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
                              to={`/admin/news/${item._id}`}
                            >
                              <FiEdit />
                            </A>
                          </Grid>
                          <Grid>
                            <Button invert withIcon>
                              <FiTrash onClick={() => removeNews(item._id)} />
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

AdminNews.propTypes = {
  token: PropTypes.string.isRequired,
  news: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired
    })
  ),
  message: PropTypes.string,
  count: PropTypes.number,
  handleGetNews: PropTypes.func.isRequired,
  handleRemoveNews: PropTypes.func.isRequired,
  handleResetNews: PropTypes.func.isRequired
};

const mapStateToProps = ({ admin }) => ({
  token: admin.token,
  news: admin.news.data,
  count: admin.news.count,
  message: admin.news.message
});

const mapDispatchToProps = dispatch => ({
  handleGetNews: () => dispatch(getNews()),
  handleRemoveNews: id => dispatch(deleteNews(id)),
  handleResetNews: () => dispatch(resetOneNews())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminNews);
