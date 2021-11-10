import React from "react";
import { create } from '../services/api_localStorage';
import { Link } from 'react-router-dom';

export class CreateTodoForm extends React.Component {
 constructor() {
    super();

    this.state = {
      task: '',
      status: 'pendente',
    };

    this.handleField = this.handleField.bind(this);
  };

  submitHandler = () => {
    const { onSubmit } = this.props;
    const { status, task } = this.state;
    
    if (task !== '') {
      create({ status, task });
      return onSubmit();
    };  
    alert('Preencha uma tarefa');
  };

  handleField({ target }) {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { task, status } = this.state;
    return (
      <form>
        <div className="form-group">
          <label htmlFor="text">Text:
          <input
          onChange={ this.handleField }
          className="form-control"
          type="text"
          name="task"
          id="text"
          value={task}
          />
          </label>
        </div>
        <div className="form-group">
        <label htmlFor="pendente">
          <input
            checked={ status === "pendente" || false }
            onChange={ this.handleField }
            name="status"
            type="radio"
            value='pendente'
            id="pendente"
          />
            Pendente
          </label>
          <label htmlFor="andamento">
          <input
            onChange={ this.handleField }
            name="status"
            type="radio"
            value='Em andamento'
            id="andamento"
          />
            Em andamento
          </label>
          <label htmlFor="pronto">
          <input
            name="status"
            type="radio"
            value='pronto'
            onChange={ this.handleField }
            id="pronto"
          />
            Pronto
          </label>
        </div>
        <div className="form-group">
          <button type="button" className="btn btn-primary" onClick={this.submitHandler}>
            Save Todo
          </button>
          &nbsp; &nbsp;
          <Link to="/" className="btn btn-danger">
            Cancel
          </Link>
        </div>
      </form>
    );
  }
};