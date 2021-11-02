import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import Bio from './views/BioView';
import ProjectsView from './views/ProjectsView';
import ContactView from './views/ContactView';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={HomeView} />
          <Route exact path='/bio' component={Bio} />
          <Route exact path='/projects' component={ProjectsView} />
          <Route exact path='/contact' component={ContactView} />
          <Route component={HomeView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
