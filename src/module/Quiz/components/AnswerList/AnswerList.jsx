import React from "react";
import Answer from "components/Answer";

export default function AnswerList({ correct, incorrect, getAnswer }) {
  const randomAnswerPosition = Math.floor(
    Math.random() * Math.floor(incorrect.length + 1)
  );

  const answers = incorrect;
  answers.splice(randomAnswerPosition, 0, correct);

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
