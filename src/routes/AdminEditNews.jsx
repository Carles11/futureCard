import React, { Fragment, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import ViewLayout from "@src/components/ViewLayout";
import HeaderSection from "@src/components/HeaderSection";
import Loader from "@src/components/Loader";
import {
  A,
  Article,
  Grid,
  Button,
  H4,
  Hr,
  Figure,
  Image
} from "@src/css/elements";
import { Form, Input, Label, Textarea } from "@src/css/elements/form";
import isAdmin from "@src/hooks/isAdmin";

import {
  getOneNews,
  createNews,
  updateNews
} from "@src/actions/admin/actionsSideEffects";

const INITIAL_STATE = {
  title: "",
  text: "",
  file: "",
  imagePreview: "",
  link: ""
};

const AdminEditNews = ({
  token,
  match,
  news,
  message,
  handleGetOneNews,
  handleCreateNews,
  handleUpdateNews
}) => {
  const admin = isAdmin(token);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  /**
   * Get Career if Edit Mode
   * */
  useEffect(() => {
    const { id } = match.params;

    if (id && id !== "new") {
      handleGetOneNews(id);
    }
  }, [match]);

  /**
   * Update state  if Edit Mode
   * */
  useEffect(() => {
    const { title = "", text = "", file = "", link = "" } = news;
    dispatch({
      type: "ALL",
      title,
      text,
      file,
      link
    });
  }, [news]);

  /**
   * Redirect to User List when User is Created/Updated
   * */
  useEffect(() => {
    if (message === "UPDATED") {
      dispatch({ type: "REDIRECT", redirect: true });
    }
  }, [message]);

  function handleOnSubmit(e) {
    e.preventDefault();

    const body = Object.assign({}, state, {
      creator: admin.id
    });

    const { imagePreview, ...data } = body;

    if (Object.keys(news).length && news._id) {
      handleUpdateNews(news._id, data);
    } else {
      handleCreateNews(data);
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    dispatch({ type: "INPUT", name, value });
  }

  function handleImageChange(e) {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      dispatch({ type: "PREVIEW", imagePreview: reader.result });
    };

    reader.readAsDataURL(file);
    dispatch({ type: "FILE", file });
  }

  return (
    <Fragment>
      {admin === null && (
        <Grid loader>
          <Loader />
        </Grid>
      )}
      {state.redirect && <Redirect to="/admin/news" />}
      {admin !== null && !admin && <Redirect to="/admin" />}
      {admin && (
        <ViewLayout
          title="Edit News"
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
                  <H4 withMargin="1rem 0">
                    {Object.keys(news).length ? "Update News" : "Create News"}
                  </H4>
                </Grid>
                <Grid heightProp="50px">
                  <A role="button" to="/admin/news">
                    Back to News List
                  </A>
                </Grid>
              </Grid>
            </Grid>
            <Hr invertColor />

            <Grid withWidth="50%" withMargin="1rem auto 3rem" vertical middle>
              <Form onSubmit={handleOnSubmit}>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  type="text"
                  name="title"
                  required
                  defaultValue={state.title}
                  onChange={handleInputChange}
                />
                <Label htmlFor="title">Text</Label>
                <Textarea
                  rows="5"
                  id="text"
                  name="text"
                  required
                  value={state.text}
                  onChange={handleInputChange}
                />
                {!state.imagePreview && !!news.image && (
                  <Fragment>
                    <Label>Current Image</Label>
                    <Figure preview>
                      <Image preview src={news.image} />
                    </Figure>
                  </Fragment>
                )}
                {!!state.imagePreview && (
                  <Fragment>
                    <Label>Image Preview</Label>
                    <Figure preview>
                      <Image preview src={state.imagePreview} />
                    </Figure>
                  </Fragment>
                )}
                <Label htmlFor="file">Upload Image</Label>
                <Input
                  id="file"
                  type="file"
                  name="file"
                  defaultValue={state.file}
                  onChange={handleImageChange}
                />

                <Fragment>
                  <Label htmlFor="link">External Link (Optional)</Label>
                  <Input
                    id="link"
                    type="text"
                    name="link"
                    defaultValue={state.link}
                    onChange={handleInputChange}
                  />
                </Fragment>
                <Button contact type="submit">
                  {!!Object.keys(news).length && news._id ? "Update" : "Create"}
                </Button>
              </Form>
            </Grid>
          </Article>
        </ViewLayout>
      )}
    </Fragment>
  );
};

function reducer(state, action) {
  switch (action.type) {
    case 'INPUT':
      return {
        ...state,
        [action.name]: action.value,
      };
    case 'FILE':
      return {
        ...state,
        file: action.file,
      };
    case 'PREVIEW':
      return {
        ...state,
        imagePreview: action.imagePreview,
      };
    case 'ALL':
      return {
        ...state,
        title: action.title,
        text: action.text,
        file: action.file,
        link: action.link,
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

AdminEditNews.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }).isRequired,
  token: PropTypes.string.isRequired,
  news: PropTypes.shape({
    _id: PropTypes.string
  }),
  message: PropTypes.string,
  handleGetOneNews: PropTypes.func.isRequired,
  handleCreateNews: PropTypes.func.isRequired,
  handleUpdateNews: PropTypes.func.isRequired
};

const mapStateToProps = ({ admin }) => ({
  token: admin.token,
  news: admin.news.itemSelected,
  message: admin.news.message
});

const mapDispatchToProps = dispatch => ({
  handleGetOneNews: id => dispatch(getOneNews(id)),
  handleCreateNews: body => dispatch(createNews(body)),
  handleUpdateNews: (id, body) => dispatch(updateNews(id, body))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminEditNews);
