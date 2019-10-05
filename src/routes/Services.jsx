import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ViewLayout from "@src/components/ViewLayout";
import HeaderSection from "@src/components/HeaderSection";
import Box from "@src/css/blocks/Box";

import { Article, P, H4, Hr } from "@src/css/elements";
import { NAVIGATION, BACKGROUND_IMG } from "@src/utils/constants";

const Services = ({ DIC }) => {
  const SECTIONS = NAVIGATION.find(item => item.label === "SERVICES");
  const [title, ...first] = DIC.SERVICES_DESCRIPTION.split(".");
  const [para1, para2, ...second] = first;
  const [para3, para4, ...third] = second;
  const [para5, para6] = third;

  return (
    <ViewLayout
      title={`${DIC.NAV_LABEL_SERVICES} | ${DIC.SERVICES_DESIGN_TITLE}`}
      description={title}
      image={BACKGROUND_IMG.OUR_SERVICES}
    >
      <HeaderSection title={DIC.NAV_LABEL_SERVICES} subtitle={`${title}`} />
      <Article centered>
        <P>{`${para1}. ${para2}.`}</P>
        <P>{`${para3}. ${para4}.`}</P>
        <P>{`${para5}. ${para6}.`}</P>
        <Box>
          {SECTIONS.child.map(section => {
            const TITLE = `SERVICES_${section.label}_TITLE`;
            const CONTENT = `SERVICES_${section.label}_DESCRIPTION`;

            return (
              <Box.Link
                to={section.link}
                key={section.key}
                with_scale="true"
                with_background="true"
              >
                <H4 withMargin="1.5rem 0.5rem 0.5rem" centered>
                  {DIC[TITLE]}
                </H4>
                <Hr
                  withSize="80px"
                  withMargin="0 auto 1rem"
                  withAlign="center"
                />
                <P small withPadding="0 1rem 0.5rem">
                  {`${DIC[CONTENT].split(".")[0]}.`}
                </P>
              </Box.Link>
            );
          })}
        </Box>
      </Article>
    </ViewLayout>
  );
};

Services.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_SERVICES: PropTypes.string.isRequired,
    SERVICES_TITLE: PropTypes.string.isRequired,
    SERVICES_SUBTITLE: PropTypes.string.isRequired,
    SERVICES_DESCRIPTION: PropTypes.string.isRequired,
    SERVICES_DESIGN_CONTENT_0: PropTypes.string.isRequired,
    SERVICES_DESIGN_CONTENT_1: PropTypes.string.isRequired,
    SERVICES_DESIGN_SUBTITLE: PropTypes.string.isRequired,
    SERVICES_DESIGN_TITLE: PropTypes.string.isRequired
  }).isRequired
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data
});

export default connect(
  mapStateToProps,
  null
)(Services);
