import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesByTrackId } from "../../../rtk/features/courses/coursesActions";
import CoruseTrack from "../CourseTrack/CoruseTrack";

const BackendCourses = () => {
  const backendTrackId = "669c09cdcea52da6612b8e5f";
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
          <div className="col-12" key={course._id}>
            <CoruseTrack course={course} />
          </div>
        );
      })}
    </div>
  );
};

export default BackendCourses;
