import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { CustomTitle } from "../CustomeTitle/CustomTitle";
import { CourseCard } from "../CourseCard/CourseCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoursesData } from "../../rtk/features/courses/coursesActions";

const PopularCourses = () => {
  const courses = useSelector((state) => state.courses.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoursesData());
  }, []);

  const displayedCourses = courses.slice(0, 3);

  return (
    <div className="popular-courses" style={{ padding: "100px 0 50px" }}>
      <div className="container">
        <Row className="row">
          <div className="col-12">
            <CustomTitle title={"Popular Courses"} />
          </div>
        </Row>
        <Row>
          {displayedCourses&&displayedCourses.map((course) => {
            return (
              <div className="col-sm-6 col-lg-4" key={course._id}>
                <CourseCard course={course} />
              </div>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default PopularCourses;
