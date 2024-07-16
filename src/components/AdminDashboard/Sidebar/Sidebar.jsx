import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faArrowTrendUp,
  faBookOpenReader,
  faCircleQuestion,
  faEnvelope,
  faGear,
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
              to="/student_dashboard"
            >
              <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
              Home
            </NavLink>
          </li>
          <li className="sidebar-menu-item">
            <a className="sidebar-menu-button" href="!#">
              <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
              Browse Courses
            </a>
          </li>
          <li className="sidebar-menu-item">
            <a className="sidebar-menu-button" href="!#">
              <FontAwesomeIcon icon={faBookOpenReader}></FontAwesomeIcon>
              My Courses
            </a>
          </li>
          <li className="sidebar-menu-item">
            <a className="sidebar-menu-button" href="!#">
              <FontAwesomeIcon icon={faTv}></FontAwesomeIcon>
              Take a Quiz
            </a>
          </li>
          <li className="sidebar-menu-item">
            <a className="sidebar-menu-button" href="!#">
              <FontAwesomeIcon icon={faSquarePollVertical}></FontAwesomeIcon>
              Quiz Results
            </a>
          </li>
          <li className="sidebar-menu-item">
            <Link
              className="sidebar-menu-button"
              to="/student_dashboard/edit_account"
            >
              <FontAwesomeIcon icon={faSquarePollVertical}></FontAwesomeIcon>
              Edit Account
            </Link>
          </li>
          <li className="sidebar-menu-item">
            <Link
              to="/student_dashboard/billing"
              className="sidebar-menu-button"
            >
              <FontAwesomeIcon icon={faSquarePollVertical}></FontAwesomeIcon>
              Billing
            </Link>
          </li>
          <li className="sidebar-menu-item">
            <a className="sidebar-menu-button" href="/login">
              <FontAwesomeIcon icon={faSquarePollVertical}></FontAwesomeIcon>
              Logout
            </a>
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
          <li className="sidebar-menu-item">
            <a className="sidebar-menu-button" href="!#">
              <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>
              Quiz Manager
            </a>
          </li>
          <li className="sidebar-menu-item">
            <a className="sidebar-menu-button" href="!#">
              <FontAwesomeIcon icon={faArrowTrendUp}></FontAwesomeIcon>
              Earnings
            </a>
          </li>
          <li className="sidebar-menu-item">
            <a className="sidebar-menu-button" href="!#">
              <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
              Settings
            </a>
          </li>
        </ul>
      </div>
      <div className="admin">
        <div className="sidebar-heading">Admin</div>
        <ul className="sidebar-menu">
          <li className="sidebar-menu-item">
            <a className="sidebar-menu-button" href="!#">
              <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
              Home
            </a>
          </li>
          <li className="sidebar-menu-item">
            <a className="sidebar-menu-button" href="!#">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              Emails
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
