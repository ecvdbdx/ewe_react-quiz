import React from "react";
import AnswerList from "../AnswerList";
import "./Question.scss";

export default function Question({
  questionData: { question, correct_answer, incorrect_answers },
}) {
  return (
    <div className="questionContainer">
      <h1>{question}</h1>
      <AnswerList correct={correct_answer} incorrect={incorrect_answers} />
    </div>
  );
}
