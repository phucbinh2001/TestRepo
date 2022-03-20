import React from "react";
import { Container } from "react-bulma-components";
import { AboutProject } from "views/Homepage/components/AboutProject";
import { Banner } from "./components/Banner";
import { FandQ } from "./components/F&Q";
import { Fact } from "./components/Fact";
import { Presale } from "./components/Presale";
import { QandA } from "./components/QandA";
import { Roadmap } from "./components/Roadmap";
import { Tokenomics } from "./components/Tokenomics";

export const Homepage = () => {
  return (
    <div>
      <Container style={{ scrollBehavior: "smooth" }}>
        <Banner />
        <AboutProject />
        <Presale />
        <Tokenomics />
        <QandA />
        <Fact />
        <Roadmap />
        <FandQ />
      </Container>
    </div>
  );
};
