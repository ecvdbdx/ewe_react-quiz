import "./Header.scss";
import React from "react";
import { connect } from "react-redux";

const HeaderRecapTemplate = ({ answersList }) => {
  let correctAnswerCounter = 0;
  let questionsCounter = 0;

  answersList.map((question) => {
    questionsCounter++;
    if (question.isCorrect) {
      correctAnswerCounter++;
    }
  });

  return (
    <div className="headerRecapRoot">
      <div className="inner">
        <h1>Recap</h1>
        <h2>
          {correctAnswerCounter}/{questionsCounter}
        </h2>
      </div>
    </div>
  );
};

const mapState = (state) => ({
  answersList: state.questions.answersList,
});

export default connect(mapState)(HeaderRecapTemplate);
