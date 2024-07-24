import { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";

import "./add_lesson.css";
import { useDispatch, useSelector } from "react-redux";
import { setLessonsInputs } from "../../../rtk/features/coursesForm/formSlice";
import { addLesson } from "../../../rtk/features/lessons/lessonsActions";
import SuccessMessage from "../../SuccessMessage/SuccessMessage";
import { resetSuccess } from "../../../rtk/features/lessons/lessonSlice";
import { fetchCoursesData } from "../../../rtk/features/courses/coursesActions";

const AddLesson = () => {
  const lessonsInputs = useSelector((state) => state.form.lessonsInputs);
  const courses = useSelector((state) => state.courses.courses);
  const success = useSelector((state) => state.lessons.success);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newLessons = { ...lessonsInputs, [name]: value };
    dispatch(setLessonsInputs(newLessons));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const lessonsData = {
      ...lessonsInputs,
    };
    dispatch(addLesson(lessonsData));
  };

  useEffect(() => {
    dispatch(fetchCoursesData());
  }, []);

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        dispatch(resetSuccess());
      }, 1000);
    }
  }, [success]);

  return (
    <div className="add-lesson">
      <form onSubmit={handleSubmit}>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Lesson </Accordion.Header>
            <Accordion.Body>
              <label htmlFor="title">Lesson title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={lessonsInputs.title || ""}
                onChange={handleOnChange}
              />
              <label htmlFor="video">Lesson video:</label>
              <input
                type="text"
                id="video"
                name="video"
                value={lessonsInputs.video || ""}
                onChange={handleOnChange}
              />
              <label htmlFor="course">Course:</label>
              <select
                id="course"
                name="course"
                value={lessonsInputs.course || ""}
                onChange={handleOnChange}
              >
                <option value="">Select a course</option>
                {courses.map((course) => (
                  <option key={course._id} value={course._id}>
                    {course.title}
                  </option>
                ))}
              </select>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <button type="submit" className="btn btn-success mt-4">
          Add Lesson
        </button>
      </form>
      {success ? (
        <SuccessMessage message={"Lessons Added Successfully"} />
      ) : null}
    </div>
  );
};

export default AddLesson;
