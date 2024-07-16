import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import DashboardMainTitle from "../DashboardMainTitle/DashboardMainTitle";
import SingleInstructorCourse from "./../SingleInstructorCourse/SingleInstructorCourse";
import { resetInputs } from "../../../rtk/features/coursesForm/formSlice";

const InstructorCourses = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleOnReset = () => {
    dispatch(resetInputs());
  };

  return (
    <>
      <DashboardMainTitle title={"Courses"} />
      <div className="d-flex align-items-center justify-content-end mb-4">
        {location.pathname === "/admin_dashboard/instructor_courses" ? (
          <Link to="add_course" className="btn btn-success me-3">
            + New Course
          </Link>
        ) : (
          <>
            <Link
              to="/admin_dashboard/instructor_courses"
              className="btn btn-primary me-3"
            >
              Courses
            </Link>
            {location.pathname ===
            "/admin_dashboard/instructor_courses/add_course" ? (
              <Button className="btn btn-danger me-3" onClick={handleOnReset}>
                Reset
              </Button>
            ) : (
              ""
            )}
          </>
        )}
      </div>
      <div className="mb-5 d-flex justify-content-around flex-wrap row">
        {location.pathname === "/admin_dashboard/instructor_courses" ? (
          <SingleInstructorCourse />
        ) : (
          <Outlet />
        )}
      </div>
    </>
  );
};

export default InstructorCourses;
