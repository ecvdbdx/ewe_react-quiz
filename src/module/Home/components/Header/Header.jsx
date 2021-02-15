import React from "react";

import Select from "components/Select"; 

export default function Header() {

  const difficulty = ["Easy", "Normal", "Hard"];
  return(
    <div className="homeHeader">
      <h1>Quizz</h1>
      <h2>Choose a category to begin</h2>
      <Select name="Set your difficulty" options={difficulty}/>
   </div>
  );
}