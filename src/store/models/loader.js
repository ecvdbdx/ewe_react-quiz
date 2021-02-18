const loader = {
  state: {
    hasLoader: false,
  }, // initial state

  reducers: {
    // handle state changes with pure functions
    toggleLoader(state, payload) {
      return {
        ...state,
        hasLoader: payload,
      };
    },
  },

  effects: (dispatch) => ({
    // handle state changes with impure functions.

    openLoader() {
      dispatch.loader.toggleLoader(true);
    },

    closeLoader() {
      dispatch.loader.toggleLoader(false);
    },
  }),
};

export default loader;
