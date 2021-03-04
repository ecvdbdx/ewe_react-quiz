import "./Home.scss";
import React, { useState } from "react";
import { Header, Categories } from "./components";

export default function HomeTemplate() {
  const [difficulty, setDifficulty] = useState("");

  function getDifficulty(difficultySelected) {
    setDifficulty(difficultySelected);
  }

  return (
    <div className="homeRoot">
      <Header getDifficulty={getDifficulty} />
      <Categories difficultySelected={difficulty} />
    </div>
  );
}
