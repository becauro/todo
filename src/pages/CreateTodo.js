import React from 'react';
import { TodoForm } from "../components/TodoForm.js";
// import { createTodo } from '../services/api';

export default class CreateTodo extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  };

  onSubmit = () => {
    const { history: { push } } = this.props;
    push("/");

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