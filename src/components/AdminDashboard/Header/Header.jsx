import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faBars,
  faBell,
  faCartShopping,
  faLock,
  faMagnifyingGlass,
  faPen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header d-flex align-items-center justify-content-between">
      <div className="search">
        <form>
          <input
            type="text"
            placeholder="Search"
            className="form-control search-input"
          />
          <button className="search-btn btn">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
      <div>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item">
            <Link to="" className="nav-link">
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          </li>
          <li className="nav-item">
            <button className="btn d-flex align-items-center">
              <FontAwesomeIcon icon={faBell} />
              <span className="badge">2</span>
            </button>
          </li>
          <li className="dropdown">
            <Link to='' className="nav-link dropdown-toggle">
              <img
                src={require("../../../assets/dashboardImgs/author.jpg")}
                alt="author"
                loading="lazy"
                className="profile"
              />
            </Link>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="public_profile.html">
                <span>
                  <FontAwesomeIcon icon={faUser} />
                </span>
                Public Profile
              </a>
              <a className="dropdown-item" href="">
                <span>
                  <FontAwesomeIcon icon={faPen} />
                </span>
                Edit Account
              </a>
              <a className="dropdown-item" href="/login">
                <span>
                  <FontAwesomeIcon icon={faLock} />
                </span>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
