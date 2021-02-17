const questions = {
  state: {
    questionsList: [],
    answersList: [],
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    addAnswer(state, payload) {
      return {
        ...state,
        answersList: [...state.answersList, payload],
      };
    },
    setQuestions(state, payload) {
      console.log("reducer", payload);
      return {
        ...state,
        questionsList: payload,
      };
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.

    setQuestionsAsync({ id, difficultySelected }, rootState) {
      fetch(
        `https://opentdb.com/api.php?amount=10&category=${id}&difficulty=${difficultySelected}`
      )
        .then((res) => res.json())
        .then((res) => {
          dispatch.questions.setQuestions(res.results);
        })
        .then(() => {
          console.log(rootState);
        });
    },
  }),
};

export default questions;
