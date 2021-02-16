import React from "react";

import "./Category.scss";

export default function Category({name, id, selectCategory}) {

  return(
    <div className="category" id={id} onClick={ () => selectCategory(id)}>
      <p className="categoryName">{name}</p>
   </div>
  );
}