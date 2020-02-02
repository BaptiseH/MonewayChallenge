import React from 'react';
import './App.css';
import Users from './components/Users'
import User from './components/User'
import Home from './components/Home'
import Edit from './components/Edit'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <nav className="App-header">
          <span className="title">Moneway</span>
          <ul>
            <li>
              <Link className="link" to="/">Home</Link>
            </li>
            <li>
              <Link className="link" to="/users/">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/user/:id/edit">
            <Edit />
          </Route>
          <Route path="/user/:id">
            <User />
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
