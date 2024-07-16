import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faCircleUser,
  faEnvelope,
  faLock,
  faMagnifyingGlass,
  faPhone,
  faQuestion,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Badge from "react-bootstrap/Badge";

import { toggleSearch } from "../../rtk/features/search/searchSlice";

import "./header.css";

export const Header = () => {
  const searchVisibility = useSelector((state) => state.search.isSearchVisible);
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(toggleSearch());
  };

  return (
    <div className="main-header">
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <ul className="m-0 p-0 contact-info">
                <li className="d-none d-lg-block">
                  <div className="question">
                    <FontAwesomeIcon icon={faQuestion} />
                    <span>have any question</span>
                  </div>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  <a href="!#">+(20) 1234567890</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a href="!#"> Example@domain.com</a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <ul className="m-0 p-0 login-register align-items-center">
                <li id="login">
                  <FontAwesomeIcon icon={faLock} />
                  <Link to="">login</Link>
                </li>
                <li id="register">
                  <FontAwesomeIcon icon={faUser} />
                  <Link to="">signup</Link>
                </li>
                <li id="shopping-cart">
                  <FontAwesomeIcon icon={faCartShopping} />
                  <Link to="" className="position-relative">
                    cart
                    <Badge
                      className="rounded-circle cart-number d-flex align-items-center justify-content-center fw-bold"
                      bg="info"
                    >
                      2
                    </Badge>
                  </Link>
                </li>
                <li id="register">
                  <FontAwesomeIcon icon={faCircleUser} />
                  <Link to="/admin_dashboard">Welcome</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-bar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-4">
              <div className="logo">
                <Link to="/">
                  <img src={require("../../assets/logo.jpeg")} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-6">
              <ul className="m-0 p-0 nav-links">
                <li>
                  <NavLink to="/" className="nav-link" activeclassname="active">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/all_courses" className="nav-link">
                    All Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="nav-link">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="nav-link">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-2">
              <div className="icons">
                <div className="search-btn">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    onClick={handleSearch}
                  />
                </div>
                <div className="humburger-menu">
                  <FontAwesomeIcon icon={faBars} className="menu" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`header-search-container ${
          searchVisibility ? "active" : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="header-search-content">
                <form>
                  <input
                    type="search"
                    className="search-input"
                    placeholder="Search"
                  />
                  <button className="header-search-button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
