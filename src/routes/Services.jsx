import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ViewLayout from "@src/components/ViewLayout";
import HeaderSection from "@src/components/HeaderSection";
import Box from "@src/css/blocks/Box";

import { Article, P, H3, Hr, Container } from "@src/css/elements";
import { BACKGROUND_IMG } from "@src/utils/constants";

const SECTIONS = [
  {
    key: 13,
    label: "CONSULTING",
    link: "/our-services/card-consulting",
    bg: BACKGROUND_IMG.CARD_CONSULTING
  },
  {
    key: 10,
    label: "CARD_DESIGN",
    link: "/our-services/card-design",
    bg: BACKGROUND_IMG.CARD_DESIGN
  },
  {
    key: 11,
    label: "PERSONALIZATION",
    link: "/our-services/card-personalization",
    bg: BACKGROUND_IMG.CARD_PERSONALIZATION
  },
  {
    key: 12,
    label: "FULFILLMENT",
    link: "/our-services/fulfillment-packaging",
    bg: BACKGROUND_IMG.FULFILLMENT
  }
];

const Services = ({ DIC }) => {
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
        <Box wrap>
          {SECTIONS.map((section, index) => {
            const TITLE = `SERVICES_${section.label}_TITLE`;
            const CONTENT = `SERVICES_${section.label}_DESCRIPTION`;
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
                  <H3 withMargin="1.5rem 0.5rem 0.5rem" centered invertColor>
                    {DIC[TITLE]}
                  </H3>
                  <Hr
                    withSize="80px"
                    withMargin="0 auto 1rem"
                    withAlign="center"
                    invertColor
                  />
                  <P small withPadding="0 1rem 0.5rem" invertColor centered>
                    {`${DIC[CONTENT].split(".")[0]}.`}
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
          <P>{`${para1}. ${para2}.`}</P>
          <P>{`${para3}. ${para4}.`}</P>
          <P>{`${para5}. ${para6}.`}</P>
        </Article>
      </Container>
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
