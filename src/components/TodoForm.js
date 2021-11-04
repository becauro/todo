import React from "react";

export class TodoForm extends React.Component {
 constructor() {
    super();

    this.state = {
        text: '',
        status: '',
        fulled: false
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.handleField = this.handleField.bind(this);
  };

  componentDidUpdate () {
    const { text } = this.state;
    console.log('O estado de TodoForm');
    console.log(text);
  };

  submitHandler = () => {
    const { text, status } = this.state;
    const { onSubmit } = this.props;
    onSubmit({ text, status });
  };

  handleField({ target }) {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { text, status } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="text">Text:</label>
          <input
          onChange={ this.handleField }
          className="form-control"
          type="text"
          name="text"
          id="text"
          value={text}
          />
        </div>
        <div className="form-group">
        <label htmlFor="pendente">
          <input
            name="status"
            type="radio"
            value={status}
            onChange={ this.handleField }
            id="pendente"
          />
            Pendente
          </label>
          <label htmlFor="andamento">
          <input name="status" type="radio" value={status} onChange={ this.handleField } id="andamento" />
            Em andamento
          </label>
          <label htmlFor="pronto">
          <input name="status" type="radio" value={status} onChange={ this.handleField } id="pronto" />
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