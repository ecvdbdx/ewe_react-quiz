import React from "react";

import "./PopupFrame.scss";

export default function PopupFrame({
  title,
  message,
  closePopup,
  isPopupOpen,
}) {
  let popupState;
  if (isPopupOpen) {
    popupState = "popupRoot";
  } else {
    popupState = "popupRoot hide";
  }
  return (
    <div className={popupState}>
      <div className="close" onClick={() => closePopup()}>
        X
      </div>
      <div className="popupMain">
        <div className="popupHeader">
          <h2>{title}</h2>
        </div>
        <div className="popupContent">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}
