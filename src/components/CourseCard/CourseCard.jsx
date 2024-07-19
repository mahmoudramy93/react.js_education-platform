import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "./course_card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const CourseCard = ({ course }) => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  return (
    <div className="single_course mb-4" key={course.id} data-aos="fade-up">
      <div className="position-relative img-wrapper">
        <img src={course.image_url} alt={course.title} className="course-img" />
        <div className="overlay">
          <p className="mb-0">
            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
          </p>
        </div>
      </div>
      <div className="single-course-text">
        <div className="course-header">
          <Link to={`/course_details/${course._id}`} className="cat-btn">
            {course.title}
          </Link>
        </div>
        <div className="course-info">
          <Link to={`/course_details/${course._id}`}>
            <h3>{course.title}</h3>
          </Link>
          <p>{course.description}</p>
        </div>
        <div className="author-info">
          <div className="author-img">
            <Link to="/instructor_profile">
              <img src={require("../../assets/author.jpg")} alt="author" />
            </Link>
          </div>
          <div className="author-text">
            <p>Conduct by:</p>
            <h5>John</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
