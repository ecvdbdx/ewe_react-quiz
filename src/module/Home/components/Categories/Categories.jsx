import React from "react";

import "./Categories.scss";

import Category from "../Category";

import {getData} from "./DATA";

import { useHistory } from "react-router-dom";

export default function Categories({difficultySelected}) {
  let history = useHistory();
  const data = getData();
  const selectCategory = (selectedCategory) => {
    startQuizWithCategory(selectedCategory);
  };

  const categoryItems = data.map((value) =>
  <Category key={value.id} id={value.id} name={value.name} selectCategory={selectCategory}/>);


  async function startQuizWithCategory(id){
    fetch(`https://opentdb.com/api.php?amount=10&category=${id}&difficulty=${difficultySelected}`)
    .then(res => res.json())
    .then(json => {
      console.log(json);
      history.push("/quiz");
    });
  }

  return(
    <div className="categoriesRoot">
      <div className="inner">
        <Category name="General Knowledge" id={9} selectCategory={selectCategory}/>
        <div className="gridCategory">
          {categoryItems}
        </div>
      </div>
   </div>
  );
}