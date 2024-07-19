import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCourse,
  fetchCourseById,
} from "../../../rtk/features/courses/coursesActions";
import SuccessMessage from "../../SuccessMessage/SuccessMessage";
import { resetSuccess } from "../../../rtk/features/courses/courseSlice";
import { useNavigate, useParams } from "react-router-dom";

const UpdateCourse = () => {
  const dispatch = useDispatch();
  const courseData = useSelector((state) => state.courses.courses);
  const success = useSelector((state) => state.courses.success);
  const navigate = useNavigate();
  const { courseId } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [track, setTrack] = useState("");
  const [image_url, setImageUrl] = useState("");

  useEffect(() => {
    dispatch(fetchCourseById(courseId));
  }, [dispatch, courseId]);

  useEffect(() => {
    if (courseData) {
      setTitle(courseData.title || "");
      setDescription(courseData.description || "");
      setTrack(courseData.track || "");
      setImageUrl(courseData.image_url || "");
    }
  }, [courseData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      title: title,
      description: description,
      track: track,
      image_url: image_url,
    };

    dispatch(updateCourse({ courseId, data: newData }));
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        dispatch(resetSuccess());
        navigate(-1);
      }, 1000);
    }
  }, [success]);

  return (
    <>
      <div className="addCourse">
        <p>Update Course</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="course-name">Course Name</label>
          <input
            type="text"
            id="course-name"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="course-description">Course Description:</label>
          <input
            type="text"
            id="course-description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label htmlFor="course-track">Course Track:</label>
          <input
            type="text"
            id="course-track"
            name="track"
            value={track}
            onChange={(e) => setTrack(e.target.value)}
          />
          <label htmlFor="course-img">Img Url:</label>
          <input
            type="text"
            id="course-img"
            name="image_url"
            value={image_url}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button type="submit" className="btn btn-success">
            Update Course
          </button>
        </form>
        {success ? (
          <SuccessMessage message={"Data Updated Successfully"} />
        ) : null}
      </div>
    </>
  );
};

export default UpdateCourse;
