import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import ProjectsView from './views/ProjectsView';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/projects" component={ProjectsView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
