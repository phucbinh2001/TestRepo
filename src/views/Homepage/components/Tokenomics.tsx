import { TitleComponent } from "components/TitleComponent/TitleComponent";
import React from "react";
import { Columns, Content, Heading } from "react-bulma-components";
import tknmImg from "../../../assets/images/tkn.svg";
import tokenomic from "../../../assets/images/tokenomic-mobile.svg";
import board from "../../../assets/images/board-mobile.svg";

export const Tokenomics = () => {
  return (
    <section className="" id="tokenomics">
      <TitleComponent borderAlign={"center"}>Tokenomics & Stats</TitleComponent>
      <div className="img-box desktop">
        <img src={tknmImg} alt="" />
      </div>
      <Columns className="mobile">
        <Columns.Column>
          <img src={tokenomic} alt="" />
        </Columns.Column>
        <Columns.Column>
          <img src={board} alt="" />
        </Columns.Column>
      </Columns>
    </section>
  );
};
