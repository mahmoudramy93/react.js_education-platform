import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

import "./course_outline.css";

export const CourseOutline = ({ lesson }) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [show, setShow] = useState(false);

  const handleVideoClick = (event, videoUrl) => {
    event.preventDefault();
    setVideoUrl(videoUrl);
  };

  const handleViewDetails = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="lesson-wrapper mb-4">
        <p className="course-title">{lesson.title}</p>
        <button type="button" onClick={handleViewDetails} className="view-btn">
          View Details
        </button>
      </div>
      <ul className={`lesson-list ${show ? "active" : ""}`}>
        <li className="lesson-list-item">
          <div className="d-flex align-items-center justify-content-between">
            <p className="mb-0">{lesson.title}</p>
            <a href="#" onClick={(e) => handleVideoClick(e, lesson.video)}>
              Watch Video
            </a>
          </div>
          {videoUrl && (
            <div className="mt-3">
              <iframe
                width="560"
                height="315"
                src={videoUrl}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </li>
      </ul>
    </>
  );
};
