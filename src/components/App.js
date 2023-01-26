import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import Drugslist from './Drugslist';
import Alldoctors from './Alldoctors';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Home />
        <Switch>
          <Route exact path='/medications'>
            <Drugslist />
          </Route>
          <Route path='/doctors'>
            <Alldoctors />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
