import React from "react";
import { getById, update } from '../services/api_localStorage';

export class UpdateTodoForm extends React.Component {
 constructor() {
    super();

    this.state = {
      task: '',
      status: ''
    };

    this.handleField = this.handleField.bind(this);
  };

  componentDidMount () {
    const { taskId } = this.props;
    const { task, status} = getById(taskId);

    // Load currently data
    this.setState({ task, status});

  };

  submitHandler = () => {
    const { onSubmit, taskId} = this.props;
    const { task, status } = this.state;

    // Here the data is going to be updated:

       update(taskId, { task, status });

    onSubmit();
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
          <input  checked={ status === "Em andamento" || false } name="status" type="radio" value='Em andamento' onChange={ this.handleField } id="andamento" />
            Em andamento
          </label>
          <label htmlFor="pronto">
          <input 
            checked={ status === "pronto" || false }
            onChange={ this.handleField }
            name="status"
            type="radio"
            value='pronto'
            id="pronto"
          />
            Pronto
          </label>
        </div>
        <div className="form-group">
          <button type="button" className="btn btn-primary"  onClick={this.submitHandler}>
          Save Todo
          </button>
        </div>
      </form>
    );
  }
};