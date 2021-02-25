import React, { useState } from "react";

import { Header, RecapQuestions, NewGame } from "./components";

export default function Recap() {
  const [activeMenu, setActiveMenu] = useState(0);

  const setActiveSection = () => {
    switch (activeMenu) {
      case 0:
        return <RecapQuestions />;

      case 1:
        return <NewGame />;

      default:
        break;
    }
  };

  return (
    <div className="recapRoot">
      <Header setActiveSection={setActiveMenu} />
      {setActiveSection()}
    </div>
  );
}
