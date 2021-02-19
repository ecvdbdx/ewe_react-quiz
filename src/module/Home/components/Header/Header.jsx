import "./Header.scss";
import React from "react";
import Select from "components/Select";

export default function Header({ getDifficulty }) {
  const difficulty = ["easy", "normal", "hard"];

  return (
    <div className="headerRoot">
      <div className="inner">
        <h1>Quizz</h1>
        <h2>Choose a category to begin</h2>
        <Select
          name="Set your difficulty"
          options={difficulty}
          getDifficulty={getDifficulty}
        />
      </div>
    </div>
  );
}
