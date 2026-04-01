import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const HomeView = lazy(() => import("./views/HomeView"));
const AboutView = lazy(() => import("./views/AboutView"));
const WorkView = lazy(() => import("./views/WorkView"));

const App: React.FC = () => {
  return (
    <div className="App container-fluid">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Router>
        <Suspense fallback={<p className="loading">Loading content…</p>}>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/about" component={AboutView} />
            <Route exact path="/projects" component={WorkView} />
            <Route component={HomeView} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
