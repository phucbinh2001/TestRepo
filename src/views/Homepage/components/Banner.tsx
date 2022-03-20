import React from "react";
import { Button, Columns, Content, Heading } from "react-bulma-components";
import bannerImg from "../../../assets/images/h1.svg";

export const Banner = () => {
  return (
    <section className="center-content" id="banner">
      <Columns className="mobile-reverse">
        <Columns.Column size={7}>
          <Content>
            <Heading subtitle size={5} style={{ marginBottom: "1em" }}>
              WELCOME TO GBDOGE!
            </Heading>
            <Heading size={2}>
              Make the World <br /> GREEN BABYDOGE <br /> with Memes!
            </Heading>

            <p className="desc">
              GREEN BABYDOGE is a fully decentralized, zero-emission and fairly
              distributed community-driven token disrupting the meme economy
              aiming at protecting the environment
            </p>
          </Content>

          <Button.Group>
            <Button color={""}>How to Buy</Button>
            <Button color={"success"}>Buy GINUX</Button>
          </Button.Group>
        </Columns.Column>
        <Columns.Column size={5} style={{ minHeight: "460px" }}>
          <img
            src={bannerImg}
            alt=""
            className="animate__animated animate__bounce"
          />
        </Columns.Column>
      </Columns>
    </section>
  );
};
