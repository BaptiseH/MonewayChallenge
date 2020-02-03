import React from 'react';
import './App.css';
import Users from './components/UserListPage/Users'
import User from './components/UserPage/User'
import Home from './components/HomePage/Home'
import Edit from './components/EditPage/Edit'
import reducers from './redux/reducer.js'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ApiService from './services/api_service';



function App() {
  let store = createStore(
    reducers,
    {
        users: [],
        adress: [],
    }
  );

  ApiService.getUsers(data => {
    store.users = data
  })
  ApiService.getAllAdress(data => {
    store.adress = data
  })


  return (
    <Provider store={store} >
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
    </Provider>
  );
}

export default App;
