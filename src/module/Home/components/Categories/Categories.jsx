import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import "./Categories.scss";

import Category from "../Category";

import { getData } from "./DATA";

const data = getData();

const CategoriesTemplate = ({ setQuestionsAsync, difficultySelected }) => {
  const history = useHistory();
  console.log(difficultySelected);

  const startQuizz = async (id) => {
    const payload = {
      id,
      difficultySelected,
    };
    setQuestionsAsync(payload);
    history.push("/quiz");
  };
  const categoryItems = data.map((value) => (
    <Category
      key={value.id}
      id={value.id}
      name={value.name}
      selectCategory={startQuizz}
    />
  ));

  return (
    <div className="categoriesRoot">
      <div className="inner">
        <Category name="General Knowledge" id={9} selectCategory={startQuizz} />
        <div className="gridCategory">{categoryItems}</div>
      </div>
    </div>
  );
};

const mapState = (state) => ({
  questionsList: state.questions.questionsList,
});

const mapDispatch = (dispatch) => ({
  setQuestionsAsync: dispatch.questions.setQuestionsAsync,
});

export default connect(mapState, mapDispatch)(CategoriesTemplate);
