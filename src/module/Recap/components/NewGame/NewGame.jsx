import "./NewGame.scss";
import React from "react";
import { connect } from "react-redux";

const NewGameTemplate = ({ options }) => {
  console.log(options);

  return (
    <div className="newGameRoot">
      <p>Your options :</p>
      <ul>
        <li>Difficulty : {options.difficultySelected || "Any"}</li>
        <li>Category : {options.name}</li>
      </ul>
    </div>
  );
};

const mapState = (state) => ({
  options: state.questions.options,
});

export default connect(mapState)(NewGameTemplate);
