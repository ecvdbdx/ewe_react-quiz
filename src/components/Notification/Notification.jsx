import React from "react";
import PopupFrame from "components/PopupFrame";
import { connect } from "react-redux";

const NotificationTemplate = ({
  hasNotification,
  notificationContent: { title, message },
  closeNotification,
}) => {
  if (hasNotification)
    return (
      <PopupFrame
        title={title}
        message={message}
        closePopup={closeNotification}
      />
    );
  return false;
};

const mapState = (state) => ({
  hasNotification: state.notification.hasNotification,
  notificationContent: state.notification.notificationContent,
});

const mapDispatch = (dispatch) => ({
  closeNotification: dispatch.notification.closeNotification,
});

export default connect(mapState, mapDispatch)(NotificationTemplate);
