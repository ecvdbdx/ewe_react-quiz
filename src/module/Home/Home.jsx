import React from "react";
import "./Home.scss";

import {Header, Categories} from "./components";

export default function Home() {
  return (
    <div className="homeRoot">
      <Header/>
      <Categories/>
    </div>
  );
}
