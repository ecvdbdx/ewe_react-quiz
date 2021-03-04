import "./Question.scss";
import React from "react";
import AnswerList from "../AnswerList";

export default function Question({
  questionData: { question, answers, correct_answer },
  answerQuestion,
}) {
  const getAnswer = (answer) => {
    answerQuestion(correct_answer, answer, question);
  };

  return (
    <div className="questionContainer">
      <h1>{question}</h1>
      <AnswerList answers={answers} getAnswer={getAnswer} />
    </div>
  );
}
