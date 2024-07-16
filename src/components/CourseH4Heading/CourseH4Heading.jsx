import React from "react";

import styles from "./coruse_h4_heading.module.css";

export const CourseH4Heading = (props) => {
  const { title } = props;
  return <h4 className={styles.title}>{title}</h4>;
};
