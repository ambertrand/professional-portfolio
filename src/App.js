import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeView from "./views/HomeView";
import WorkView from "./views/WorkView";
import AboutView from "./views/AboutView";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App container-fluid">
      <Router>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/about" component={AboutView} />
          <Route exact path="/projects" component={WorkView} />
          <Route component={HomeView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
