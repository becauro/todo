import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import TodoList from './components/TodoList';
import EditTodo from './components/EditTodo';
import CreateTodo from './components/CreateTodo';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Todos</Link>
          </li>
          <li>
            <Link to="/create">Create Todo</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={TodoList}/>
        <Route exact path="/edit/:id" component={EditTodo}/>
        <Route exact path="/create" component={CreateTodo}/>
      </Switch>
    </div>
  );
}

export default App;
