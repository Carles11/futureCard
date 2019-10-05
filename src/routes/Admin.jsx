import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ViewLayout from "@src/components/ViewLayout";
import HeaderSection from "@src/components/HeaderSection";
import SignIn from "@src/components/SignIn";
import Loader from "@src/components/Loader";
import isAdmin from "@src/hooks/isAdmin";

import Box from "@src/css/blocks/Box";
import { Article, P, H3, Hr, Grid } from "@src/css/elements";

const SECTIONS = [
  {
    id: 0,
    label: "Users",
    description:
      "Handle the users whom have access to edit the FutureCard's dynamic content.",
    url: "/admin/users"
  },
  {
    id: 1,
    label: "News",
    description: "Create and edit the latest news of FutureCard",
    url: "/admin/news"
  },
  {
    id: 2,
    label: "Careers",
    description: "Publish job offers and documents from FutureCards",
    url: "/admin/careers"
  }
];

const Admin = ({ token }) => {
  const admin = isAdmin(token);

  return (
    <Fragment>
      {admin === null && (
        <Grid loader>
          <Loader />
        </Grid>
      )}
      {admin !== null && !admin && <SignIn />}
      {!!admin && (
        <ViewLayout
          title="Admin Panel"
          description="Handle the dynamic content of the FutureCard's web app."
        >
          <HeaderSection
            title={`Welcome ${admin.username}`}
            subtitle="Handle the dynamic content of the FutureCard's web app."
          />
          <Article centered>
            <Box>
              {SECTIONS.map(section => (
                <Box.Link
                  key={section.id}
                  to={section.url}
                  with_background="true"
                  with_scale="true"
                >
                  <H3 withMargin="1.5rem 0.5rem 1rem" centered>
                    {section.label}
                  </H3>
                  <Hr
                    withSize="80px"
                    withMargin="0 auto 1rem"
                    withAlign="center"
                  />
                  <P small withPadding="0 2rem 0.5rem" withAlign="center">
                    {section.description}
                  </P>
                </Box.Link>
              ))}
            </Box>
          </Article>
        </ViewLayout>
      )}
    </Fragment>
  );
};

Admin.propTypes = {
  token: PropTypes.string.isRequired
};

const mapStateToProps = ({ admin }) => ({
  token: admin.token
});

export default connect(
  mapStateToProps,
  null
)(Admin);
