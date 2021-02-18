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

    addNewAnswer(answer) {
      dispatch.questions.addAnswer(answer);
    },

    setQuestionsAsync({ id, difficultySelected }) {
      return fetch(
        `https://opentdb.com/api.php?amount=10&category=${id}&difficulty=${difficultySelected}`
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.results.length === 0)
            throw new Error("Empty results, please try another category.");
          dispatch.questions.setQuestions(res.results);
        });
    },
  }),
};

export default questions;
