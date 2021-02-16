import React from "react";
import "./Answer.scss";

export default function Answer({ answer, label, selectAnswer }) {
  return (
    <div className="answerContainer" onClick={() => selectAnswer(answer)}>
      <div className="desc">
        <p>{label}</p>
        <p>{answer}</p>
      </div>
      <div className="checkMark" />
    </div>
  );
}
