import { DisclosureComponent } from "components/DisclosureComponent/DisclosureComponent";
import { TitleComponent } from "components/TitleComponent/TitleComponent";
import React from "react";
import { Block, Columns } from "react-bulma-components";
import qandaImg from "../../../assets/images/h2.svg";

// var Panel = Collapse.Panel;
// require("rc-collapse/assets/index.css");

const data = [
  {
    title: "BSC Ecosystem",
    content: `The Green Shiba Inu is a token on the Binance Smart Chain which aims
at setting up a Carbon Neutral Economy, with a sustainable crypto
development, thus reducing the emissions and the subsequent carbon
footprint that stems from mining.`,
  },
  {
    title: `Community-driven token
& Incentives`,
    content: "PhucbinhContent",
  },
  { title: `Green Babydoge Offering`, content: "PhucbinhContent" },
  { title: `GBDOGE Protocol`, content: "PhucbinhContent" },
];

export const QandA = () => {
  return (
    <section
      className="flex-column qanda-section"
      style={{ minHeight: "unset" }}
    >
      <TitleComponent borderAlign="center">
        What makes Green BabyDoge Special?
      </TitleComponent>
      <Columns>
        <Columns.Column size={6} style={{ overflow: "hidden" }}>
          <img src={qandaImg} alt="" width={300} />
        </Columns.Column>
        <Columns.Column size={6}>
          {data.map((v) => {
            return (
              <Block>
                <DisclosureComponent title={v.title} content={v.content} />
              </Block>
            );
          })}
        </Columns.Column>
      </Columns>
    </section>
  );
};
