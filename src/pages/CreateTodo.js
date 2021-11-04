import React from 'react';
import { TodoForm } from "../components/TodoForm.js";
import { createTodo } from '../services/api';

export default class CreateTodo extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  };

  
  onSubmit = (data) => {
    createTodo(data)
    .then(() => {

      const getTasks = localStorage.getItem('tasks') || [];
      console.log('O que tem no localStorage antes do push:');
      console.log(getTasks)
      const { history: { push } } = this.props;
      push("/");

    })
    .catch((error) => {
      console.log('Deu erro na hora de gravar tarefa.')
    });
   
  };

  render() {
    return (
        <div className="container">
          <div className="mt-3">
          <h3>Create Todo Item</h3>
            <TodoForm onSubmit={this.onSubmit} />
          </div>
        </div>
    );
  };
}