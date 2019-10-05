import React, { Fragment, memo } from "react";
import PropTypes from "prop-types";

import Loader from "@src/components/Loader";

import List from "@src/css/blocks/List";
import { Article, Grid, Figure, Image, P, H3, Span } from "@src/css/elements";
import CardCarousel from "./CardCarousel";

const CardsList = memo(
  ({ cards }) => (
    <Fragment>
      {cards.length ? (
        cards
          .sort((a, b) => (a.order > b.order ? 1 : -1))
          .map(card => {
            const imageExist = !!card.img;
            const isCarousel =
              Array.isArray(card.img_list) && card.img_list.length;

            return (
              <Article
                id={card.hash ? card.hash : card._id}
                key={card._id}
                centered
                with_margin={
                  card.code === "technology"
                    ? "1rem auto 0"
                    : imageExist || isCarousel
                    ? "1.5rem auto 2.5rem"
                    : "-6rem auto 2.5rem"
                }
              >
                <Grid responsive>
                  {card.code !== "technology" && (
                    <Grid flex="2">
                      {!!isCarousel && (
                        <CardCarousel images={card.img_list} name={card.name} />
                      )}
                      {!!imageExist && (
                        <Figure card>
                          <Image
                            responsive
                            loading="auto"
                            src={card.img}
                            alt={card.name}
                          />
                        </Figure>
                      )}
                    </Grid>
                  )}
                  <Grid column flex="3" withMargin="2rem 0 0">
                    {!!card.group && (
                      <P flex small highlight withMargin="0 0 0.3rem" bold>
                        {!!card.group && <Span>{card.group}</Span>}
                        &nbsp;&nbsp;
                        {!!card.family && <Span tag>{card.family}</Span>}
                      </P>
                    )}
                    <H3 withMargin="0">{card.name}</H3>

                    <P>{card.description}</P>
                    {!!card.list && !!card.list.length && (
                      <List wrapping>
                        {card.list.map(item => (
                          <List.Item withWidth="30%" key={`${item}_${card.id}`}>
                            {item}
                          </List.Item>
                        ))}
                      </List>
                    )}
                  </Grid>
                </Grid>
              </Article>
            );
          })
      ) : (
        <Grid loader>
          <Loader />
        </Grid>
      )}
    </Fragment>
  ),
  areEqual
);

CardsList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      img: PropTypes.string
    })
  ).isRequired
};

function areEqual(prevProps, nextProps) {
  return prevProps.cards === nextProps.cards;
}

export default CardsList;
