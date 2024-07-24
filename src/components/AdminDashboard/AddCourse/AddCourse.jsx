import { useEffect } from "react";

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

  const tracks = [
    { id: "669c09cdcea52da6612b8e5f", name: "Backend" },
    { id: "669bf117cea52da6612b8e11", name: "Frontend" },
    { id: "66a1180739b8e8041875949d", name: "DevOps" },
  ];

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "track") {
      const selectedTrack = tracks.find((track) => track.name === value);
      if (selectedTrack) {
        dispatch(
          setCoursesInputs({ ...coursesInputs, [name]: selectedTrack.id })
        );
      }
    } else {
      dispatch(setCoursesInputs({ ...coursesInputs, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const courseData = {
      ...coursesInputs,
    };
    console.log(coursesInputs);
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
          <select
            className="mb-4 mt-2"
            id="course-track"
            name="track"
            value={
              tracks.find((track) => track.id === coursesInputs.track)?.name ||
              ""
            }
            onChange={handleOnChange}
          >
            <option value="">Select Track</option>
            {tracks.map((track) => (
              <option key={track.id} value={track.name}>
                {track.name}
              </option>
            ))}
          </select>
          <label htmlFor="course-img">Img Url:</label>
          <input
            type="text"
            id="course-img"
            name="image_url"
            value={coursesInputs.image_url || ""}
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
