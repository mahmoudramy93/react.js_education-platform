
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Link } from "react-router-dom";

import PopularCourses from "../components/PopularCourses/PopularCourses";
import WhoEdu from "../components/WhoEdu/WhoEdu";

import "./home.css";

export const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <div className="landing-page">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="text">
                <h1>Education &amp; Traning Organization</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet illo ab magnam dolorum quam, explicabo dolore magni
                  earum voluptas ducimus odit cumque cum eligendi, quo laborum
                  fugiat tempore temporibus! Accusamus?
                </p>
                <div className="buttons">
                  <Link to="/all_courses" className="browse-courses active">
                    Browse Couruses
                  </Link>
                  <Link to="/contact" className="contact-us">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopularCourses />
      <WhoEdu />
      <Footer />
    </div>
  );
};
