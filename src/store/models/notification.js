const notification = {
  state: {
    hasNotification: false,
    notificationContent: {},
  }, // initial state

  reducers: {
    // handle state changes with pure functions
    toggleNotification(state, payload) {
      return {
        ...state,
        hasNotification: payload,
      };
    },

    setNotificationContent(state, payload) {
      console.log("reducer", payload);
      return {
        ...state,
        notificationContent: payload,
      };
    },

    resetNotificationContent(state) {
      return {
        ...state,
        notificationContent: {},
      };
    },
  },

  effects: (dispatch) => ({
    // handle state changes with impure functions.

    openNotification(payload) {
      dispatch.notification.toggleNotification(true);
      dispatch.notification.setNotificationContent(payload);
    },

    closeNotification() {
      dispatch.notification.toggleNotification(false);
      dispatch.notification.resetNotificationContent();
    },
  }),
};

export default notification;
