import React, { useState } from "react";
import { useSelector } from "react-redux";

export const CourseCategories = () => {
  const categories = useSelector((state) => state.categories.categories);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <ul className="categories-list m-0 p-0">
      {categories &&
        categories.map((category, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                name={category}
                className="form-check-input"
                value={category}
                id={category}
                onChange={() => handleCategoryChange(category)}
              />
              <label className="label" htmlFor={category}>
                {category.replace("-", " ").toUpperCase()}
              </label>
            </li>
          );
        })}
    </ul>
  );
};
