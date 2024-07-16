import React from "react";

import "./shopping_cart_course.css";
import { Button } from "react-bootstrap";

export const ShoppingCartCourse = ({ courseCart }) => {
  return (
    <div className="single_course">
      <div className="single_course_img">
        <img src={courseCart.course_image} alt={courseCart.title} />
      </div>
      <div className="single-course-text">
        <div className="course-header">
          <a href="course_details.html" className="cat-btn">
            {courseCart.title}
          </a>
          <h4>{courseCart.price} $</h4>
        </div>
        <div className="course-info">
          <a href="course_details.html">
            <h3>{courseCart.title}</h3>
          </a>
          <p>{courseCart.description}</p>
          <div className="remove-course">
            <Button className="remove-course-btn bg-transparent border-0">
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
