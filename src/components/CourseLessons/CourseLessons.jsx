const CourseLessons = ({ lesson }) => {
  return (
    <div className="d-flex align-items-center justify-content-between mb-2">
      <p className="mb-0">{lesson.title}</p>
      <a href={lesson.video} target="_blank">
        explain
      </a>
    </div>
  );
};

export default CourseLessons;
