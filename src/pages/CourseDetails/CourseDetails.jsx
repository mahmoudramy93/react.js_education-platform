import { CourseReviwers } from "../../components/CourseReviwers/CourseReviwers";
import { AddReview } from "../../components/AddReview/AddReview";
import { CourseDetailsInstructor } from "../../components/CourseDetailsInstructor/CourseDetailsInstructor";

import { Header } from "../../components/Header/Header";
import { Landing } from "../../components/Landing/Landing";
import { Footer } from "../../components/Footer/Footer";
import { CourseH4Heading } from "../../components/CourseH4Heading/CourseH4Heading";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseById } from "../../rtk/features/courses/coursesActions";
import { fetchLessons } from "../../rtk/features/lessons/lessonsActions";
import { CourseOutline } from "../../components/CourseOutline/CourseOutline";

import "./course_details.css";

export const CourseDetails = () => {
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const course = useSelector((state) => state.courses.courses);
  const lessons = useSelector((state) => state.lessons.lessons);

  useEffect(() => {
    dispatch(fetchCourseById(courseId));
    dispatch(fetchLessons());
  }, []);

  return (
    <>
      <Header />
      <Landing title={"Course Details"} />
      <div className="course-details">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-8 course-details-left">
              <div className="main-img">
                <img src={course.image_url} alt="course" />
              </div>
              <div className="content-wrapper">
                <CourseH4Heading title={"Course Description"} />
                <div className="content">{course.description}</div>
                <h4 className="title">What You Will Learn</h4>
                <div className="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  aliquid saepe, aperiam aut delectus repellendus consequatur
                  asperiores quam ratione, aspernatur sit inventore
                  necessitatibus autem magnam ipsam dolorem modi? Nihil, sint!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  aliquid saepe, aperiam aut delectus repellendus consequatur
                  asperiores quam ratione, aspernatur sit inventore
                  necessitatibus autem magnam ipsam dolorem modi? Nihil, sint!
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                  laudantium aliquam eaque, nisi dignissimos quas nobis eos at
                  velit esse quia, iure nesciunt provident. Numquam ducimus
                  quisquam excepturi natus dolorem?
                </div>
                <CourseH4Heading title={"Course Outline"} />
                <div className="content">
                  {lessons
                    .filter((lesson) => lesson.course === course._id)
                    .map((filterdLessons, index) => {
                      return (
                        <ul
                          className="course-list p-0"
                          key={filterdLessons._id}
                        >
                          <li className="course-item mb-4">
                            <CourseOutline
                              lesson={filterdLessons}
                              index={index + 1}
                            />
                          </li>
                        </ul>
                      );
                    })}
                </div>
                <CourseH4Heading title={"About Instructor"} />
                <div className="cotnent">
                  <CourseDetailsInstructor />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4 course-details-right">
              <div className="sidebar-top">
                <ul className="p-0 m-0">
                  <li>
                    <p>Course Fee</p>
                    <p>$250</p>
                  </li>
                  <li>
                    <p>Duration</p>
                    <p>30 days</p>
                  </li>
                  <li>
                    <p>Lectures</p>
                    <p>10</p>
                  </li>
                  <li>
                    <p>Certificate of Completion</p>
                    <p>True</p>
                  </li>
                </ul>
                <a href="!#" className="enroll-btn">
                  Enroll The Course
                </a>
                <a href="!#" className="add-wishlist-btn">
                  Add to wishlist
                </a>
              </div>
              <div className="comments">
                <CourseReviwers />
                <CourseReviwers />
                <CourseReviwers />
                <CourseReviwers />
              </div>
              <div className="review">
                <CourseH4Heading title={"Add a Review"} />
                <AddReview />
              </div>
              <div id="popup-box" className="popup-box">
                <a href="payment.html" className="link">
                  Proceed to Payment
                </a>
                <a href="login.html" className="link">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
