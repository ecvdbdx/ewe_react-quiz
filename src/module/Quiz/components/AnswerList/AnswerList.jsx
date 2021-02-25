import React from "react";
import Answer from "components/Answer";

export default function AnswerList({ answers, getAnswer }) {
  const answersComponents = answers.map((answer, id) => (
    <Answer
      key={id}
      answer={answer}
      label={`Answer ${id + 1}`}
      selectAnswer={getAnswer}
    />
  ));

  return answersComponents;
}
