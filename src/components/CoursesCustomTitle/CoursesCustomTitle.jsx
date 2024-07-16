import React from "react";

import "./courses_custom_title.css";

export const CoursesCustomTitle = (props) => {
    const {title} = props
  return <h3 className="course-custom-title">{title}</h3>;
};
