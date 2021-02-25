import "./Categories.scss";
import React from "react";
import Category from "../Category";
import { getData } from "./DATA";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const data = getData();

const CategoriesTemplate = ({
  setQuestionsAsync,
  difficultySelected,
  updateOptions,
  openNotification,
  openLoader,
  closeLoader,
}) => {
  const history = useHistory();

  const startQuizz = (id) => {
    openLoader();
    const payload = {
      id,
      difficultySelected,
    };
    updateOptions(payload);

    setQuestionsAsync()
      .then(() => {
        history.push("/quiz");
      })
      .catch((e) => {
        openNotification({ title: "Error", message: e.message });
      })
      .then(() => {
        closeLoader();
      });
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

const mapState = ({ questions }) => ({
  questionsList: questions.questionsList,
  options: questions.options,
});

const mapDispatch = ({ questions, notification, loader }) => ({
  setQuestionsAsync: questions.setQuestionsAsync,
  openNotification: notification.openNotification,
  openLoader: loader.openLoader,
  closeLoader: loader.closeLoader,
  updateOptions: questions.updateOptions,
});

export default connect(mapState, mapDispatch)(CategoriesTemplate);
