import { TitleComponent } from "components/TitleComponent/TitleComponent";
import React from "react";
import roadmapimg from "../../../assets/images/roadmap.svg";

export const Roadmap = () => {
  return (
    <section style={{ minHeight: "unset" }}>
      <div className="container">
        <TitleComponent borderAlign="center">Roadmap</TitleComponent>
        <img src={roadmapimg} alt="" />
      </div>
    </section>
  );
};
