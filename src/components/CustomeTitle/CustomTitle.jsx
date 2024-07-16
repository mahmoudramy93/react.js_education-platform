import React from "react";

import "./custom_title.css";

export const CustomTitle = (props) => {
  const { title } = props;
  return <h2 className="custom-title">{title}</h2>;
};
