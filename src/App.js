import "./styles/App.scss";
import React from "react";
import Home from "./pages/home";
import Quiz from "./pages/quiz";
import Recap from "./pages/recap";
import Loader from "./components/Loader";
import Notification from "./components/Notification";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Notification />
      <Loader />
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
