import React, { useState } from "react";
import { connect } from "react-redux";
import { Question } from "./components";
import { useHistory } from "react-router-dom";

import "./Quiz.scss";

const QuizTemplate = ({ questionsList, addNewAnswer }) => {
  const history = useHistory();
  const [questionIndex, setQuestionIndex] = useState(0);

  const currentQuestion = questionsList[questionIndex];

  const answerQuestion = (correct, clientResponse, question) => {
    const isCorrect = correct === clientResponse;
    addNewAnswer({ question, correct, clientResponse, isCorrect });

    if (questionIndex + 1 === questionsList.length) {
      history.push("/recap");
    } else {
      setQuestionIndex((index) => index + 1);
    }
  };

  return (
    <div className="quizRoot">
      <div className="inner">
        <p className="question">
          Question {questionIndex + 1} / {questionsList.length}
        </p>
        <Question
          questionData={currentQuestion}
          answerQuestion={answerQuestion}
        />
      </div>
    </div>
  );
};

const mapState = (state) => ({
  questionsList: state.questions.questionsList,
});

const mapDispatch = (dispatch) => ({
  addNewAnswer: dispatch.questions.addNewAnswer,
});

export default connect(mapState, mapDispatch)(QuizTemplate);
