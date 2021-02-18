import React from "react";
import "./Answer.scss";

export default function Answer({
  answer,
  label,
  selectAnswer,
  isCorrect,
  isWrong,
}) {
  return (
    <div
      className={[
        "answerContainer",
        isCorrect ? " correctAnswer" : "",
        isWrong ? " wrongAnswer" : "",
      ].join(" ")}
      onClick={() => selectAnswer(answer)}
    >
      <div className="desc">
        <p>{label}</p>
        <p>{answer}</p>
      </div>
      <div className="checkMark" />
    </div>
  );
}
