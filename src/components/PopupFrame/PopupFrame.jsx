import "./PopupFrame.scss";
import React from "react";

export default function PopupFrame({ title, message, closePopup }) {
  return (
    <div className="popupRoot">
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
