import React from "react";

export class TodoForm extends React.Component {
 constructor() {
    super();

    this.state = {
        text: '',
        fulled: false
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.handleField = this.handleField.bind(this);
  };

  // DEBUGGING:
  componentDidUpdate () {
    const { text } = this.state;
    console.log('Estado mudando em TodoForm:');
    console.log(text);
  };

  submitHandler = () => {
    const { text } = this.state;
    const { onSubmit } = this.props;
    onSubmit(text);
  };

  handleField({ target }) {
    this.setState({ [target.name]: target.value });
  };

  render() {
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
            />
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