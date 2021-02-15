import React from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Quiz from "./pages/quiz";
import Recap from "./pages/recap";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/recap">
            <Recap />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
