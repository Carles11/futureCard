import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ViewLayout from "@src/components/ViewLayout";
import HeaderSection from "@src/components/HeaderSection";
import { NAVIGATION, BACKGROUND_IMG } from "@src/utils/constants";

import Box from "@src/css/blocks/Box";
import { Article, P, H4, Hr } from "@src/css/elements";

const Features = ({ DIC }) => {
  const SECTIONS = NAVIGATION.find(item => item.label === "CARDS");
  return (
    <ViewLayout
      title={`${DIC.NAV_LABEL_CARDS}`}
      description={DIC.CARD_FEATURES_DESCRIPTION}
      image={BACKGROUND_IMG.CARD_FEATURES}
    >
      <HeaderSection
        title={DIC.NAV_LABEL_CARDS}
        subtitle={DIC.CARD_FEATURES_DESCRIPTION}
      />
      <Article centered>
        <P>{DIC.CARD_FEATURES_CONTENT}</P>
        <Box>
          {SECTIONS.child.map(section => {
            const TITLE = `CARD_FEATURES_${section.label}`;
            const CONTENT = `CARD_FEATURES_${section.label}_DESCRIPTION`;

            return (
              <Box.Link
                to={section.link}
                key={section.key}
                with_scale="true"
                with_background="true"
              >
                {/* <Grid
                  withIcon
                  withPadding='2rem 2rem 1rem'
                  flex={1}
                  vertical='center'>
                  {section.icon}
                </Grid> */}
                <H4 withMargin="1.5rem 0.5rem 0.5rem" centered>
                  {DIC[TITLE]}
                </H4>
                <Hr
                  withSize="80px"
                  withMargin="0 auto 1rem"
                  withAlign="center"
                />
                <P small withPadding="0 1rem 0.5rem">
                  {`${DIC[CONTENT].split(".")[1]}.`}
                </P>
              </Box.Link>
            );
          })}
        </Box>
      </Article>
    </ViewLayout>
  );
};

Features.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_SOLUTIONS: PropTypes.string.isRequired,
    NAV_LABEL_END_TO_END: PropTypes.string.isRequired,
    SOLUTIONS_END_TO_END_DESCRIPTION: PropTypes.string.isRequired,
    SOLUTIONS_END_TO_END_CONTENT: PropTypes.string.isRequired
  }).isRequired
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data
});

export default connect(
  mapStateToProps,
  null
)(Features);
