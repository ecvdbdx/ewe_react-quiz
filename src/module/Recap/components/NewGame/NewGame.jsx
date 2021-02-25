import "./NewGame.scss";
import React from "react";
import { connect } from "react-redux";
import Button from "components/Button";
import { useHistory } from "react-router-dom";

const NewGameTemplate = ({
  options,
  setQuestionsAsync,
  openNotification,
  openLoader,
  closeLoader,
}) => {
  const history = useHistory();

  const startQuizz = () => {
    openLoader();
    setQuestionsAsync()
      .then(() => {
        history.push("/quiz");
      })
      .catch((e) => {
        openNotification({ title: "Error", message: e.message });
      })
      .then(() => {
        closeLoader();
      });
  };

  return (
    <div className="newGameRoot">
      <p>Your options :</p>
      <ul>
        <li>Difficulty : {options.difficultySelected || "Any"}</li>
        <li>Category : {options.name}</li>
      </ul>
      <Button click={() => history.push("/")}>Back home</Button>
      <Button click={() => startQuizz()}>Retry with these options</Button>
    </div>
  );
};

const mapState = (state) => ({
  options: state.questions.options,
});

const mapDispatch = ({ questions, notification, loader }) => ({
  setQuestionsAsync: questions.setQuestionsAsync,
  openNotification: notification.openNotification,
  openLoader: loader.openLoader,
  closeLoader: loader.closeLoader,
});

export default connect(mapState, mapDispatch)(NewGameTemplate);
