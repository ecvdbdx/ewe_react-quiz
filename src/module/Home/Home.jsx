import React, { useState } from "react";
import "./Home.scss";

import {Header, Categories} from "./components";

export default function Home() {

  const [difficulty, setDifficulty] = useState("easy");

  function getDifficulty(difficultySelected){
    setDifficulty(difficultySelected);
  }

  return (
    <div className="homeRoot">
      <Header getDifficulty={getDifficulty}/>
      <Categories difficultySelected={difficulty} />
    </div>
  );
}
