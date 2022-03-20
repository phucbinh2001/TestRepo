import React from "react";
import { Heading } from "react-bulma-components";
import "./titleStyle.scss";

export const TitleComponent = ({
  children,
  borderAlign = "left",
}: {
  children: string;
  borderAlign?: "center" | "left" | "right";
}) => {
  return (
    <Heading className={`title-component ${borderAlign}`} size={1}>
      {children}
    </Heading>
  );
};
