import BackendCourses from "../BackendCourses.jsx/BackendCourses";
import DashboardMainTitle from "../DashboardMainTitle/DashboardMainTitle";
import FrontEndCourses from "../FrontEndCourses/FrontEndCourses";
import "./tracks.css";

const Tracks = () => {

  return (
    <>
      <DashboardMainTitle title={"Tracks"} />
      <div className="d-flex align-items-center justify-content-around">
        <h4 className="mb-4 fs-5 fw-bold text-center">Frontend</h4>
        <h4 className="mb-4 fs-5 fw-bold text-center">Backend</h4>
      </div>
      <div className="d-flex align-items-center justify-content-between mb-4 gap-4">
        <div className="frontend w-50">
          <FrontEndCourses />
        </div>
        <div className="backend w-50">
          <BackendCourses />
        </div>
      </div>
    </>
  );
};

export default Tracks;
