const notification = {
  state: {
    notificationContent: {}
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    setNotification(state, payload) {
      console.log("reducer", payload);
      return {
        ...state,
        notificationContent: payload,
      };
    },

    resetNotification(state) {
      return {
        ...state,
        notificationContent: {},
      };
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.

    openNotification(payload) {
      dispatch.notification.setNotification(payload);
    },

    closeNotification() {
      dispatch.notification.resetNotification();
    },
  }),
};

export default notification;
