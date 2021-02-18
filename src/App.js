import React from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Quiz from "./pages/quiz";
import Recap from "./pages/recap";
import Notification from "./components/Notification";

function App() {
  return (
    <div>
      <Notification />
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
    </div>
  );
}

export default App;
