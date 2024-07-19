import { Link } from "react-router-dom";

const CoruseTrack = ({ course }) => {
  return (
    <div className="card mb-5 single-instructor-course p-0">
      <div className="row g-0">
        <div className="col-md-6">
          <img
            src={course.image_url}
            className="img-fluid rounded-start object-fit-cover"
            alt="nodejs"
            loading="lazy"
          />
        </div>
        <div className="col-md-6">
          <div className="card-body position-relative">
            <Link
              to={`/course_details/${course._id}`}
              className="card-title fs-4"
            >
              {course.title}
            </Link>
            <p className="card-text mb-1">{course.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoruseTrack;
