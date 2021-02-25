import "./Category.scss";
import React from "react";

export default function Category({ name, id, selectCategory }) {
  return (
    <div className="category" id={id} onClick={() => selectCategory(id, name)}>
      <p className="categoryName">{name}</p>
    </div>
  );
}
