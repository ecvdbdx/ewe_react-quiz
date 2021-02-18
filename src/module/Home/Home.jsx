import React, { useState } from "react";
import "./Home.scss";

import { Header, Categories } from "./components";
import PopupFrame from "components/PopupFrame";

export default function Home() {
  const [difficulty, setDifficulty] = useState("");
  const [isPopupOpen, setPopupState] = useState(true);

  function getDifficulty(difficultySelected) {
    setDifficulty(difficultySelected);
  }

  function closePopup() {
    setPopupState(!isPopupOpen);
  }

  return (
    <div className="homeRoot">
      <PopupFrame
        title="Error"
        message="Impossible de lancer le quizz avec cette difficultée"
        closePopup={closePopup}
        isPopupOpen={isPopupOpen}
      />
      <Header getDifficulty={getDifficulty} />
      <Categories difficultySelected={difficulty} />
    </div>
  );
}
