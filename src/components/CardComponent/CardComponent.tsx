import React from "react";
import { Heading } from "react-bulma-components";
import "./cardStyle.scss";

export const CardComponent = ({
  title,
  icon,
  content,
}: {
  title: string;
  icon: any;
  content: string;
}) => {
  return (
    <div className="card-component">
      <Heading weight="bold">{title}</Heading>
      <div className="content">{content}</div>
    </div>
  );
};
