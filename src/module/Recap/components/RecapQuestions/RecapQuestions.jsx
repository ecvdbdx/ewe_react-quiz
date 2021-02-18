import React from "react";
import { connect } from "react-redux";

import Answer from "components/Answer";

import "./RecapQuestions.scss";

const RecapQuestionsTemplate = ({ answersList }) => {
  function claqueAuSol() {
    console.log("Cette fonction est eclatée au sol");
  }

  const recapQuestionsList = answersList.map((question, key) => (
    <div key={key} className="questionItem">
      <h3>Question {key + 1}</h3>
      <p className="question">{question.question}</p>
      <Answer
        label="Your answer"
        answer={question.clientResponse}
        selectAnswer={claqueAuSol}
        isCorrect={question.isCorrect}
        isWrong={!question.isCorrect}
      />
      <Answer
        label="Correct answer"
        answer={question.correct}
        selectAnswer={claqueAuSol}
      />
    </div>
  ));

  return <div className="RecapQuestionsTemplateRoot">{recapQuestionsList}</div>;
};

const mapState = (state) => ({
  answersList: state.questions.answersList,
});

export default connect(mapState)(RecapQuestionsTemplate);
