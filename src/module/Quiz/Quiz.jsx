import React from "react";
import { Question } from "./components";
import { getData } from "./DATA";

export default function Quiz() {
  const data = getData();
  const currentQuestion = data[0]; // test data

  return (
    <div>
      <h1>Helo</h1>
      <Question questionData={currentQuestion} />
    </div>
  );
}
