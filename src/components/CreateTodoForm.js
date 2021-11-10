import React from "react";
import { create } from '../services/api_localStorage';

export class CreateTodoForm extends React.Component {
 constructor() {
    super();

    this.state = {
      task: '',
      status: '',
    };

    this.handleField = this.handleField.bind(this);
  };

  componentWillUnmount() {
    const { status, task } = this.state;
    
    create({ status, task });
  };

  submitHandler = () => {
    const { onSubmit } = this.props;

    onSubmit();
  };

  handleField({ target }) {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { task } = this.state;
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
        </div>
      </form>
    );
  }
};