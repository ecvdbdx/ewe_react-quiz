import "./HeaderNav.scss";
import React, { useState } from "react";

const HeaderNavTemplate = ({ menusArray, onBtnClick }) => {
  const [activeMenu, setActiveMenu] = useState(0);

  const buttonClick = (id) => {
    setActiveMenu(id);
    onBtnClick(id);
  };

  const menusElements = menusArray.map(({ text, id }) => (
    <button
      onClick={() => buttonClick(id)}
      key={text}
      className={activeMenu === id ? "isActive" : ""}
    >
      {text}
    </button>
  ));

  return (
    <div className="headerRecapNav">
      {menusElements}
      <div
        className="underline"
        style={{ transform: "translateX(" + activeMenu * 100 + "%)" }}
      />
    </div>
  );
};

export default HeaderNavTemplate;
