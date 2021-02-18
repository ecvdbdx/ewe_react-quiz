import React from "react";
import AnswerList from "../AnswerList";
import "./Question.scss";

export default function Question({
  questionData: { question, correct_answer, incorrect_answers },
  answerQuestion,
}) {
  const getAnswer = (answer) => {
    answerQuestion(correct_answer, answer, question);
  };

  return (
    <div className="questionContainer">
      <h1>{question}</h1>
      <AnswerList
        correct={correct_answer}
        incorrect={incorrect_answers}
        getAnswer={getAnswer}
      />
    </div>
  );
}
