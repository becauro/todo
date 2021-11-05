import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import ListTodo from './pages/ListTodo';
import UpdateTodo from './pages/UpdateTodo';
import CreateTodo from './pages/CreateTodo';
import './App.css';

function App() {
  
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item navbar-item-left">
            <Link to="/" className="nav-link"><span className="nav-link-span">Todos</span></Link>
          </li>
          <li className="navbar-item navbar-item-right">
            <Link to="/create" className="nav-link"><span className="nav-link-span nav-link-span-right" >Create Todo</span></Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={ListTodo}/>
        <Route exact path="/edit/:id" component={UpdateTodo}/>
        <Route exact path="/create" component={CreateTodo}/>
      </Switch>
    </div>
  );
}

export default App;
