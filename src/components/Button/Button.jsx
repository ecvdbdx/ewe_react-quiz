import "./Button.scss";
import React from "react";

export default function Button({ click, children }) {
  return (
    <button className="dsButton" onClick={click}>
      {children}
    </button>
  );
}
