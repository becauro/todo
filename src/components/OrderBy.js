import React from "react";



export default class OrderBy extends React.Component {
  constructor() {
    super();

    this.state = {
        field: '',
    };

    this.handleField = this.handleField.bind(this);
  };

  handleField({ target }) {
    const { getFieldOrder } = this.props;
    this.setState({ field: target.value });

    getFieldOrder(target.value);
  };

  render() {
    const { field } = this.props;

    return (
      <div className="form-group">
        <span> Order By: </span> <br/>
      <label htmlFor="Task">
        <input
          checked={ field === 'task' || false }
          name="field"
          type="radio"
          value='task' onChange={ this.handleField } id="Task"
        />
          Task
        </label> <br/>
        <label htmlFor="Status">
        <input
          checked={ field === 'status' || false }
          name="field"
          type="radio" 
          value='status' onChange={ this.handleField } id="Status"
        />
          Status
        </label> <br/>
        <label htmlFor="Date">
        <input
          checked={ field === 'creationDate' || false }
          name="field"
          type="radio"
          value='creationDate' onChange={ this.handleField } id="Date"
        />
          Date
        </label> <br/>
      </div>
    )
  }
}