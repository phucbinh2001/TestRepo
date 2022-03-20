import { DisclosureComponent } from "components/DisclosureComponent/DisclosureComponent";
import { TitleComponent } from "components/TitleComponent/TitleComponent";
import React from "react";
import { Columns } from "react-bulma-components";

const data = [
  {
    title: "How do I buy GINUX?",
    content: `The Green Shiba Inu is a token on the Binance Smart Chain which aims
at setting up a Carbon Neutral Economy, with a sustainable crypto
development, thus reducing the emissions and the subsequent carbon
footprint that stems from mining.`,
  },
  { title: "Is the contract public?", content: "PhucbinhContent" },
  {
    title: `Is it normal to get an error
when buying or
selling on PancakeSwap?`,
    content: "PhucbinhContent",
  },
  {
    title: `How can I join the
GBDOGEcommunity?`,
    content: "PhucbinhContent",
  },
];

export const FandQ = () => {
  return (
    <section style={{ minHeight: "unset" }}>
      <div style={{ padding: "2em 0 5em" }} id="FAQ">
        <TitleComponent borderAlign="center">FAQ</TitleComponent>
        <Columns>
          {data.map((d, index) => {
            return (
              <Columns.Column size={6}>
                <DisclosureComponent title={d.title} content={d.content} />
              </Columns.Column>
            );
          })}
        </Columns>
      </div>
    </section>
  );
};
