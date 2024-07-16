import { useEffect, useState } from "react";

import "./add_course.css";
import { useDispatch, useSelector } from "react-redux";
import { addCourseToApi } from "../../../rtk/features/courses/coursesActions";
import AddLesson from "../Lessons/AddLesson";
import { setCoursesInputs } from "../../../rtk/features/coursesForm/formSlice";
import SuccessMessage from "../../SuccessMessage/SuccessMessage";
import { resetSuccess } from "../../../rtk/features/courses/courseSlice";

const AddCourse = () => {
  const coursesInputs = useSelector((state) => state.form.coursesInputs);
  const success = useSelector((state) => state.courses.success);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(setCoursesInputs({ ...coursesInputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const courseData = {
      ...coursesInputs,
    };
    dispatch(addCourseToApi(courseData));
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        dispatch(resetSuccess());
      }, 1000);
    }
  }, [success]);

  return (
    <>
      <div className="addCourse mb-4">
        <p>Add Course</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="course-name">Course Name</label>
          <input
            type="text"
            id="course-name"
            name="title"
            value={coursesInputs.title || ""}
            onChange={handleOnChange}
          />

          <label htmlFor="course-description">Course Description:</label>
          <input
            type="text"
            id="course-description"
            name="description"
            value={coursesInputs.description || ""}
            onChange={handleOnChange}
          />
          <label htmlFor="course-track">Course Track:</label>
          <input
            type="text"
            id="course-track"
            name="track"
            value={coursesInputs.track || ""}
            onChange={handleOnChange}
          />
          <button type="submit" className="btn btn-success">
            Add Course
          </button>
        </form>
        {success ? (
          <SuccessMessage message={"Courses Added Successfully"} />
        ) : null}
      </div>
      <AddLesson />
    </>
  );
};

export default AddCourse;
