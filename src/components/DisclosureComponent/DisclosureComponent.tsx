import React, { useState } from "react";
import "./dislosuare.scss";

export const DisclosureComponent = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="disclosure-box">
      <div className="disclosure">
        <div className="header" onClick={() => setIsOpen(!isOpen)}>
          {title}
        </div>
        <div className={`content ${isOpen ? "show" : "hide"}`}>{content}</div>
      </div>
    </div>
  );
};
