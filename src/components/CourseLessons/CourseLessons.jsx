import Accordion from "react-bootstrap/Accordion";

const CourseLessons = ({ lesson }) => {
  console.log(lesson);
  return (
    <>
      <p>{lesson.title}</p>
      <a href={lsesson.video}>explain</a>
    </>
  );
};

export default CourseLessons;
