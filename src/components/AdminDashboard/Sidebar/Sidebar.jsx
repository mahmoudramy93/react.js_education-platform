import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faArrowTrendUp,
  faBookOpenReader,
  faCircleQuestion,
  faEnvelope,
  faGear,
  faGripLines,
  faHouse,
  faMagnifyingGlass,
  faSquarePollVertical,
  faTv,
} from "@fortawesome/free-solid-svg-icons";

import "./sidebar.css";
import { Link, NavLink } from "react-router-dom";
import logoImage from "../../../assets/without_bg.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo d-flex mb-4 align-items-center">
        <div className="logo-image">
          <Link to="/admin_dashboard">
            <img src={logoImage} alt="logo" loading="lazy"></img>
          </Link>
        </div>
        <div className="logo-name">
          <h4>Edu City</h4>
        </div>
      </div>
      <div className="student">
        <div className="sidebar-heading">Student</div>
        <ul className="sidebar-menu">
          <li className="sidebar-menu-item">
            <NavLink
              className={({ isActive }) =>
                `sidebar-menu-button ${isActive ? "active" : ""}`
              }
              to="/admin_dashboard"
            >
              <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
              Home
            </NavLink>
          </li>
          <li className="sidebar-menu-item">
            <NavLink
              className={({ isActive }) =>
                `sidebar-menu-button ${isActive ? "active" : ""}`
              }
              to="/admin_dashboard/tracks"
            >
              <FontAwesomeIcon icon={faGripLines}></FontAwesomeIcon>
              Tracks
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="instructor">
        <div className="sidebar-heading">Instructor</div>
        <ul className="sidebar-menu">
          <li className="sidebar-menu-item">
            <NavLink
              to="/admin_dashboard/dashboard_instructor_home"
              className={({ isActive }) =>
                `sidebar-menu-button ${isActive ? "active" : ""}`
              }
            >
              <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
              Home
            </NavLink>
          </li>
          <li className="sidebar-menu-item">
            <NavLink
              to="/admin_dashboard/instructor_courses"
              className={({ isActive }) =>
                `sidebar-menu-button ${isActive ? "active" : ""}`
              }
            >
              <FontAwesomeIcon icon={faBookOpenReader}></FontAwesomeIcon>
              Courses
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="admin">
        <div className="sidebar-heading">Admin</div>
        <ul className="sidebar-menu">
          <li className="sidebar-menu-item">
            <Link to='' className="sidebar-menu-button">
              <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
              Home
            </Link>
          </li>
          <li className="sidebar-menu-item">
            <Link
              to="/admin_dashboard/manage_tracks"
              className="sidebar-menu-button"
            >
              <FontAwesomeIcon icon={faGripLines}></FontAwesomeIcon>
              Manage Tracks
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
