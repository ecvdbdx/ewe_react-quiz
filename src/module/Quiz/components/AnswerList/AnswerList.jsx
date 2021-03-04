import React, { useState } from "react";
import Answer from "components/Answer";
import Button from "components/Button";

export default function AnswerList({ answers, getAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const answersComponents = answers.map((answer, id) => (
    <Answer
      key={id}
      answer={answer}
      isChecked={selectedAnswer === answer}
      label={`Answer ${id + 1}`}
      selectAnswer={setSelectedAnswer}
    />
  ));

  const submitAnswer = () => {
    if (selectedAnswer) getAnswer(selectedAnswer);
  };

  return (
    <div className="AnswersContainer">
      <div className="AnswerList">{answersComponents}</div>
      <Button click={submitAnswer}>Submit</Button>
    </div>
  );
}
