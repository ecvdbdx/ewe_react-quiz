import React from "react";
import "./Answer.scss";

export default function Answer({
  answer,
  label,
  selectAnswer,
  isCorrect,
  isWrong,
}) {
  // const [isChecked, setIsChecked] = useState(false);

  // function putAnswer(answer) {
  //   setIsChecked(!isChecked);
  //   selectAnswer(answer);
  // }
  return (
    <div
      className={[
        "answerContainer",
        isCorrect ? " correctAnswer" : "",
        isWrong ? " wrongAnswer" : "",
        // isChecked ? "selectedAnswer" : "",
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
