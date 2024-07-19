import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesByTrackId } from "../../../rtk/features/courses/coursesActions";
import CoruseTrack from "../CourseTrack/CoruseTrack";

const BackendCourses = () => {
  const backendTrackId = "6698fa62717be96951149dde";
  const dispatch = useDispatch();
  const backendCourses = useSelector((state) => state.courses.backendCourses);

  useEffect(() => {
    dispatch(
      getCoursesByTrackId({
        trackId: backendTrackId,
        track: "backend",
      })
    );
  }, [dispatch, backendTrackId]);

  return (
    <div className="row">
      {backendCourses.map((course) => {
        return (
          <div className="col-6" key={course._id}>
            <CoruseTrack course={course} />
          </div>
        );
      })}
    </div>
  );
};

export default BackendCourses;
