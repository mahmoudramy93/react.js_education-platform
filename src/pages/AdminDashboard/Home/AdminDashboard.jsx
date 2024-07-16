import React from "react";
import Header from "../../../components/AdminDashboard/Header/Header";
import Sidebar from "../../../components/AdminDashboard/Sidebar/Sidebar";

import "./adminDashboard.css";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard d-flex ">
      <Sidebar />
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
