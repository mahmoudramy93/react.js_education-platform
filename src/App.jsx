import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import "./styles/global.css";
import "./styles/colors.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { Home } from "./pages/Home";
import { About } from "./pages/About/About";
import { AllCourses } from "./pages/AllCourses/AllCourses";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import { CourseDetails } from "./pages/CourseDetails/CourseDetails";
import { InstructorProfile } from "./pages/InstructorProfile/InstructorProfile";

// dashboard
import AdminDashboard from "./pages/AdminDashboard/Home/AdminDashboard";
import InstructorCourses from "./components/AdminDashboard/InstructorCourses/InstructorCourses";
import AddCourse from "./components/AdminDashboard/AddCourse/AddCourse";
import DashboardInstructorHome from "./components/DashboardInstructorHome/DashboardInstructorHome";
import { CourseDetailsInstructor } from "./components/CourseDetailsInstructor/CourseDetailsInstructor";
import UpdateCourse from "./components/AdminDashboard/UpdateCourse/UpdateCourse";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/edu_city/">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/all_courses" element={<AllCourses />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/course_details" element={<CourseDetails />}></Route>
          <Route
            path="/instructor_profile/:id"
            element={<InstructorProfile />}
          ></Route>
          <Route
            path="/course_details_instructor"
            element={<CourseDetailsInstructor />}
          ></Route>
          {/* admin dashboard */}
          <Route path="/admin_dashboard" element={<AdminDashboard />}>
            <Route
              path="dashboard_instructor_home"
              element={<DashboardInstructorHome />}
            ></Route>
            <Route path="instructor_courses" element={<InstructorCourses />}>
              <Route path="add_course" element={<AddCourse />}></Route>
              <Route
                path="edit_course/:courseId"
                element={<UpdateCourse />}
              ></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
