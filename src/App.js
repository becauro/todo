import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListTodo from './pages/ListTodo';
import UpdateTodo from './pages/UpdateTodo';
import CreateTodo from './pages/CreateTodo';
import './App.css';

function App() {
  
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ListTodo}/>
        <Route exact path="/edit/:id" component={UpdateTodo}/>
        <Route exact path="/create" component={CreateTodo}/>
      </Switch>
    </div>
  );
}

export default App;
