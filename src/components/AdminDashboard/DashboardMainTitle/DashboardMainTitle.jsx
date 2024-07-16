import React from "react";

const styles = {
  mainTitle: {
    padding: "50px 0",
    fontWeight: "bold",
    letterSpacing: "2px",
  },
};

const DashboardMainTitle = ({ title }) => {
  return <h2 style={styles.mainTitle}>{title}</h2>;
};

export default DashboardMainTitle;
