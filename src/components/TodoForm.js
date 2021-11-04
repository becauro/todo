import React from "react";
import { getAll } from '../services/api_localStorage';

export class TodoForm extends React.Component {
 constructor() {
    super();

    this.state = {
        task: '',
        status: '',
        fulled: false,
        tasks: []
    };

    this.handleField = this.handleField.bind(this);
  };

  componentDidMount () {

    const ls = getAll();

    this.setState({
     tasks: ls,
     });
  };

  componentWillUnmount() {
    const { task, status, tasks } = this.state;
    const id = tasks.length + 1;

    // Here we fill localStorage before umount the component:

    if(task !== '') {
      localStorage.setItem('tasks', JSON.stringify([ ...tasks, { id, task, status }]));
    };

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
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="text">Text:</label>
          <input
          onChange={ this.handleField }
          className="form-control"
          type="text"
          name="task"
          id="text"
          value={task}
          />
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
          <input name="status" type="radio" value='andamento' onChange={ this.handleField } id="andamento" />
            Em andamento
          </label>
          <label htmlFor="pronto">
          <input name="status" type="radio" value='pronto' onChange={ this.handleField } id="pronto" />
            Pronto
          </label>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
          Save Todo
          </button>
        </div>
      </form>
    );
  }
};