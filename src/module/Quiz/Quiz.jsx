import React, { useState } from "react";
import { Question } from "./components";
import { getData } from "./DATA";

export default function Quiz() {
  const [questionIndex, setQuestionIndex] = useState(0);

  const data = getData();
  const currentQuestion = data[questionIndex]; // test data

  const answerQuestion = (correct, clientResponse) => {
    console.log(correct, clientResponse);
    setQuestionIndex((index) => index + 1);
  };

  return (
    <div>
      <h1>Helo</h1>
      <Question
        questionData={currentQuestion}
        answerQuestion={answerQuestion}
      />
    </div>
  );
}
