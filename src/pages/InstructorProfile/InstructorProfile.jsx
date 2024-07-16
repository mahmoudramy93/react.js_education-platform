import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { CourseCard } from "../../components/CourseCard/CourseCard";
import { InstructorInfo } from "../../components/InstructorInfo/InstructorInfo";
import { CourseH4Heading } from "../../components/CourseH4Heading/CourseH4Heading";
import { fetchCoursesData } from "../../rtk/features/courses/coursesActions";

import "./instructor_profile.css";
import { useParams } from "react-router-dom";

export const InstructorProfile = () => {
  const courses = useSelector((state) => state.courses.courses);
  const coursesCreator = useSelector((state) => state.creators.creator);
  const dispatch = useDispatch();
  const { id } = useParams();

  const filterByCreator = courses.filter(
    (course) =>
      coursesCreator.course_ids && coursesCreator.course_ids.includes(course.id)
  );

  useEffect(() => {
    dispatch(fetchCoursesData());
  }, [dispatch, id]);

  return (
    <>
      <Header />
      <div className="instructor-profile profile">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-8">
              <div className="profile-content">
                <div className="name">
                  <h1>John</h1>
                  <p>Backend</p>
                </div>
                <div className="desc">
                  <CourseH4Heading title={"About me"} />
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Iusto dolorum dolores magnam, quam sit optio eligendi dicta
                    quas obcaecati non repellat, veniam deserunt eum? Dolore
                    harum facere minima maxime incidunt.
                    <br />
                    <br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Iusto dolorum dolores magnam, quam sit optio eligendi dicta
                    quas obcaecati non repellat, veniam deserunt eum? Dolore
                    harum facere minima maxime incidunt.
                  </p>
                </div>
                <div className="courses">
                  <h4 className="title mb-4">
                    My courses (<span>2</span>)
                  </h4>
                  <div className="row">
                    {filterByCreator.map((course) => {
                      return (
                        <div className="col-sm-12 col-lg-6" key={course.id}>
                          <CourseCard course={course} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <InstructorInfo />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
