import { CardComponent } from "components/CardComponent/CardComponent";
import { TitleComponent } from "components/TitleComponent/TitleComponent";
import React from "react";
import { Card, Columns, Heading } from "react-bulma-components";

const data = [
  {
    title: "Fair Launch",
    icon: null,
    content: ` 90% of the total supply was given as
liquidity. 8% is reserved for the most
important environmental activists
locked for 12 months since inception
and a 2% is for marketing. No
allocation for the team`,
  },
  {
    title: "No Rugs Possible",
    icon: null,
    content: `The whole liquidity is locked in
PancakeSwap and BakerySwap,
and the ownership of the contract
has been sent to the burn address`,
  },
  {
    title: "Market & Adoption",
    icon: null,
    content: `Since there is no presale or early big
wallets, everyone has to buy in the
open market, ensuring a fair and
complete distribution`,
  },
  {
    title: "100% Decentralized",
    icon: null,
    content: `GINUX is community-driven and
managed by volunteers`,
  },
  {
    title: "Earnings",
    icon: null,
    content: `Earn GINUX by farming it on
Pancakeswap through our
https://farm.greenshiba.org site. Up to
50% of the Total Supply is reserved for
farming`,
  },
  {
    title: "Token Burn & Buyback",
    icon: null,
    content: `1.51T GINUX from the LP have been
burned and the LP funds are used
to Buy Back GINUX from the
market
`,
  },
];

export const Fact = () => {
  return (
    <section style={{ paddingTop: "3em" }} id="fact">
      <TitleComponent borderAlign="center">Fact</TitleComponent>
      <Columns>
        {data.map((d) => {
          return (
            <Columns.Column size={4}>
              <CardComponent
                title={d.title}
                content={d.content}
                icon={d.icon}
              />
            </Columns.Column>
          );
        })}
      </Columns>
    </section>
  );
};
