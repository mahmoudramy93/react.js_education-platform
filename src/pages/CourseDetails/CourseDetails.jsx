import React from "react";
import { CourseReviwers } from "../../components/CourseReviwers/CourseReviwers";
import { AddReview } from "../../components/AddReview/AddReview";
import { CourseDetailsInstructor } from "../../components/CourseDetailsInstructor/CourseDetailsInstructor";

import { Header } from "../../components/Header/Header";
import { Landing } from "../../components/Landing/Landing";
import { Footer } from "../../components/Footer/Footer";
import { CourseH4Heading } from "../../components/CourseH4Heading/CourseH4Heading";

import "./course_details.css";

export const CourseDetails = () => {
  return (
    <>
      <Header />
      <Landing title={"Course Details"} />
      <div className="course-details">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-8 course-details-left">
              <div className="main-img">
                <img src={require("../../assets/course.jpg")} alt="course" />
              </div>
              <div className="content-wrapper">
                <CourseH4Heading title={"Course Description"} />
                <div className="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  aliquid saepe, aperiam aut delectus repellendus consequatur
                  asperiores quam ratione, aspernatur sit inventore
                  necessitatibus autem magnam ipsam dolorem modi? Nihil, sint!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  aliquid saepe, aperiam aut delectus repellendus consequatur
                  asperiores quam ratione, aspernatur sit inventore
                  necessitatibus autem magnam ipsam dolorem modi? Nihil, sint!
                </div>
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
                  <ul className="course-list p-0">
                    <li className="course-item">
                      <div className="lesson-wrapper">
                        <p className="course-title">Introduction Lesson</p>
                        <a href="!#" className="view-btn">
                          View Details
                        </a>
                      </div>
                      <ul className="lesson-list">
                        <li className="lesson-list-item">Lesson 1</li>
                        <li className="lesson-list-item">Lesson 2</li>
                      </ul>
                    </li>
                    <li className="course-item">
                      <div className="lesson-wrapper">
                        <p className="course-title">Introduction Lesson</p>
                        <a href="!#" className="view-btn">
                          View Details
                        </a>
                      </div>
                      <ul className="lesson-list">
                        <li className="lesson-list-item">Lesson 1</li>
                        <li className="lesson-list-item">Lesson 2</li>
                        <li className="lesson-list-item">Lesson 3</li>
                      </ul>
                    </li>
                    <li className="course-item">
                      <div className="lesson-wrapper">
                        <p className="course-title">Introduction Lesson</p>
                        <a href="!#" className="view-btn">
                          View Details
                        </a>
                      </div>
                      <ul className="lesson-list">
                        <li className="lesson-list-item">Lesson 1</li>
                        <li className="lesson-list-item">Lesson 2</li>
                        <li className="lesson-list-item">Lesson 3</li>
                      </ul>
                    </li>
                    <li className="course-item">
                      <div className="lesson-wrapper">
                        <p className="course-title">Introduction Lesson</p>
                        <a href="!#" className="view-btn">
                          View Details
                        </a>
                      </div>
                      <ul className="lesson-list">
                        <li className="lesson-list-item">Lesson 1</li>
                        <li className="lesson-list-item">Lesson 2</li>
                        <li className="lesson-list-item">Lesson 3</li>
                      </ul>
                    </li>
                    <li className="course-item">
                      <div className="lesson-wrapper">
                        <p className="course-title">Introduction Lesson</p>
                        <a href="!#" className="view-btn">
                          View Details
                        </a>
                      </div>
                      <ul className="lesson-list">
                        <li className="lesson-list-item">Lesson 1</li>
                        <li className="lesson-list-item">Lesson 2</li>
                      </ul>
                    </li>
                    <li className="course-item">
                      <div className="lesson-wrapper">
                        <p className="course-title">Introduction Lesson</p>
                        <a href="!#" className="view-btn">
                          View Details
                        </a>
                      </div>
                      <ul className="lesson-list">
                        <li className="lesson-list-item">Lesson 1</li>
                        <li className="lesson-list-item">Lesson 2</li>
                        <li className="lesson-list-item">Lesson 3</li>
                      </ul>
                    </li>
                  </ul>
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
