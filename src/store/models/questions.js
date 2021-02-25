const questions = {
  state: {
    options: {},
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
    setOptions(state, payload) {
      return {
        ...state,
        options: payload,
      };
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.

    updateOptions(options) {
      dispatch.questions.setOptions(options);
    },

    addNewAnswer(answer) {
      dispatch.questions.addAnswer(answer);
    },

    setQuestionsAsync(
      data,
      {
        questions: {
          options: { id, difficultySelected },
        },
      }
    ) {
      return fetch(
        `https://opentdb.com/api.php?amount=10&category=${id}&difficulty=${difficultySelected}`
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.results.length === 0)
            throw new Error("Empty results, please try another category.");

          res.results.map((question) => {
            const {
              correct_answer: correct,
              incorrect_answers: incorrect,
            } = question;

            const randomAnswerPosition = Math.floor(
              Math.random() * Math.floor(incorrect.length + 1)
            );

            const answers = [...incorrect];
            answers.splice(randomAnswerPosition, 0, correct);
            question.answers = answers;

            return question;
          });
          dispatch.questions.setQuestions(res.results);
        });
    },
  }),
};

export default questions;
