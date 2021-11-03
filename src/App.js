import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import TodoList from './components/TodoList';
import EditTodo from './components/EditTodo';
import CreateTodo from './components/CreateTodo';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={TodoList}/>
        <Route exact path="/edit/:id" component={EditTodo}/>
        <Route exact path="/" component={CreateTodo}/>
      </Switch>
    </div>
  );
}

export default App;
