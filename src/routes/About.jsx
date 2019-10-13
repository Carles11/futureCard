import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ViewLayout from "@src/components/ViewLayout";
import HeaderSection from "@src/components/HeaderSection";
import { BACKGROUND_IMG } from "@src/utils/constants";

import Box from "@src/css/blocks/Box/index";
import { Article, H3, Hr, P, Container } from "@src/css/elements/index";

const SECTIONS = [
  {
    key: 8,
    label: "FACILITY",
    link: "/about-futurecard/our-facility-and-capabilities",
    bg: BACKGROUND_IMG.OUR_SOLUTIONS
  },
  {
    key: 9,
    label: "CAREERS",
    link: "/about-futurecard/careers",
    bg: BACKGROUND_IMG.OUR_SERVICES
  }
];

/**
 * About View Component
 *
 * @param {Object} props
 * @param {Object} props.DIC
 */
const About = ({ DIC }) => {
  return (
    <ViewLayout
      title={`${DIC.ABOUT_TITLE}`}
      description={DIC.ABOUT_US_DESCRIPTION}
      image={BACKGROUND_IMG.ABOUT_US}
    >
      <HeaderSection
        title={DIC.NAV_LABEL_WHO_WE_ARE}
        subtitle={DIC.ABOUT_US_DESCRIPTION_PAGE}
      />
      <Article centered>
        <Box wrap>
          {SECTIONS.map((section, index) => {
            const TITLE = `NAV_LABEL_${section.label}`;
            const CONTENT = `ABOUT_US_${section.label}_DESCRIPTION`;
            const isEven = index % 2 === 0;

            return (
              <Box.Link
                wrap
                key={section.key}
                to={section.link}
                nomargin="true"
                with_height="325px"
                with_scale="true"
                style={{ backgroundImage: `url(${section.bg})` }}
              >
                <Box.Wrapper>
                  <H3 withMargin="1.5rem 0.5rem 1rem" centered invertColor>
                    {DIC[TITLE]}
                  </H3>
                  <Hr
                    withSize="80px"
                    withMargin="0 auto 1rem"
                    withAlign="center"
                    invertColor
                  />
                  <P
                    small
                    withPadding="0 1rem 0.5rem"
                    withAlign="center"
                    invertColor
                    centered
                  >
                    {`${DIC[CONTENT].split(".")[1]}.`}
                  </P>
                </Box.Wrapper>
                <Box.Wrapper.Bg isEven={isEven} />
              </Box.Link>
            );
          })}
        </Box>
      </Article>
      <Container background>
        <Article centered>
          <P>{DIC.ABOUT_US_CONTENT_0}</P>
          <P>{DIC.ABOUT_US_CONTENT_1}</P>
          <P>{DIC.ABOUT_US_CONTENT_2}</P>
        </Article>
      </Container>
    </ViewLayout>
  );
};

About.propTypes = {
  DIC: PropTypes.shape({
    NAV_LABEL_ABOUT: PropTypes.string.isRequired,
    ABOUT_US_DESCRIPTION: PropTypes.string.isRequired,
    ABOUT_US_DESCRIPTION_PAGE: PropTypes.string.isRequired,
    ABOUT_US_CONTENT_0: PropTypes.string.isRequired,
    ABOUT_US_CONTENT_1: PropTypes.string.isRequired,
    ABOUT_US_CONTENT_2: PropTypes.string.isRequired
  }).isRequired
};

const mapStateToProps = ({ dictionary }) => ({
  DIC: dictionary.data
});

export default connect(
  mapStateToProps,
  null
)(About);
