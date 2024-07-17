import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import Accordion from "react-bootstrap/Accordion";
import {
  deleteCourse,
  fetchCoursesData,
} from "../../../rtk/features/courses/coursesActions";
import { fetchLessons } from "../../../rtk/features/lessons/lessonsActions";
import "./single_instructor_course.css";
import { Button } from "react-bootstrap";

import VueJs from "../../../assets/vuejs.png";
import CourseLessons from "./../../CourseLessons/CourseLessons";

const SingleInstructorCourse = () => {
  const coursesData = useSelector((state) => state.courses.courses);
  const lessonsData = useSelector((state) => state.lessons.lessons);
  const [showOptions, setShowOptions] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoursesData());
    dispatch(fetchLessons());
  }, [dispatch]);

  const handleShowOptions = (index) => {
    setShowOptions((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleDeleteCourse = (courseId) => {
    dispatch(deleteCourse(courseId));
    dispatch(fetchCoursesData());
  };

  return (
    <>
      {Array.isArray(coursesData) &&
        coursesData.map((course, index) => {
          return (
            <div
              className="card mb-5 single-instructor-course p-0"
              key={course._id}
              style={{ maxWidth: 540 }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={VueJs}
                    className="img-fluid rounded-start"
                    alt="nodejs"
                    loading="lazy"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body position-relative">
                    <button
                      className="options-button"
                      onClick={() => handleShowOptions(index)}
                    >
                      <FontAwesomeIcon
                        icon={faEllipsisVertical}
                      ></FontAwesomeIcon>
                    </button>
                    {showOptions === index ? (
                      <ul className="options-list">
                        <li>
                          <Button
                            className="options-link mb-2"
                            onClick={() => handleDeleteCourse(course._id)}
                          >
                            Delete
                          </Button>
                        </li>
                        <li>
                          <Link
                            to={`edit_course/${course._id}`}
                            className="options-link edit"
                          >
                            Edit
                          </Link>
                        </li>
                      </ul>
                    ) : (
                      ""
                    )}
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text mb-1">{course.description}</p>
                    <Link to={`/course_details/${course._id}`}>
                      Number of Lessons {""}
                      <span>
                        {
                          lessonsData.filter(
                            (lesson) => lesson.course === course._id
                          ).length
                        }
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default SingleInstructorCourse;
