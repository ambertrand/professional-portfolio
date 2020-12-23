import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/" component={HomeView}/>
     </Switch>
   </Router>
  );
}

export default App;
