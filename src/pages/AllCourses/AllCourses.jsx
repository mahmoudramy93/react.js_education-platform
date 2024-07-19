import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "../../components/Header/Header";
import { Landing } from "../../components/Landing/Landing";
import { CourseSearch } from "../../components/CourseSearch/CourseSearch";
import { CoursesCustomTitle } from "../../components/CoursesCustomTitle/CoursesCustomTitle";
import { CourseCategories } from "../../components/CourseCategories/CourseCategories";
import { CourseCard } from "../../components/CourseCard/CourseCard";
import { fetchCoursesData } from "../../rtk/features/courses/coursesActions";
import { Footer } from "../../components/Footer/Footer";

import "./all_courses.css";

export const AllCourses = () => {
  const courses = useSelector((state) => state.courses.courses);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filterdCoursesBySearch = Array.isArray(courses)
    ? courses.filter((course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  useEffect(() => {
    dispatch(fetchCoursesData());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Landing title={"All Courses"} />
      <div className="all-courses">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="categories-container">
                <CoursesCustomTitle title={"Courses Search"} />
                <CourseSearch
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
                <div className="categories">
                  <CoursesCustomTitle title={"Course Categories"} />
                  <CourseCategories />
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
                {filterdCoursesBySearch &&
                  filterdCoursesBySearch.map((course) => {
                    return (
                      <div className="col-sm-6" key={course._id}>
                        <CourseCard course={course} />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
