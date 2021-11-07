import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import ListTodo from './pages/ListTodo';
import UpdateTodo from './pages/UpdateTodo';
import CreateTodo from './pages/CreateTodo';
import { NavBar } from "./components/NavBar.js";
import './App.css';

function App() {
  
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ListTodo}/>
        <Route exact path="/edit/:id" component={UpdateTodo}/>
        <Route exact path="/create" component={CreateTodo}/>
      </Switch>
    </div>
  );
}

export default App;
