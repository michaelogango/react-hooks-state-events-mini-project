// CategoryFilter.js
import React from "react";
import { CATEGORIES } from "../data";

function CategoryFilter() {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map((category) => (
        <button key={category} className="category-button">
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
