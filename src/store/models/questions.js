const questions = {
  state: {
    options: {},
    questionsList: [],
    answersList: [],
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    ADD_ANSWER: (state, payload) => ({
      ...state,
      answersList: [...state.answersList, payload],
    }),

    RESET_ANWSERS: (state) => ({
      ...state,
      answersList: [],
    }),

    SET_QUESTIONS: (state, payload) => ({
      ...state,
      questionsList: payload,
    }),

    SET_OPTIONS: (state, payload) => ({
      ...state,
      options: payload,
    }),
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.

    updateOptions(options) {
      dispatch.questions.SET_OPTIONS(options);
    },

    addNewAnswer(answer) {
      dispatch.questions.ADD_ANSWER(answer);
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

          dispatch.questions.RESET_ANWSERS();

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
          dispatch.questions.SET_QUESTIONS(res.results);
        });
    },
  }),
};

export default questions;
