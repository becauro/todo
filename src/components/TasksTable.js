import React from "react";
import { Link } from 'react-router-dom';
import { getAll, remove, orderByField, getOrderBy} from '../services/api_localStorage';
import OrderBy from "./OrderBy";

export default class TasksTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          tasks: [],
          orderField: ''
        };
        this.removeTodo = this.removeTodo.bind(this);
        this.updateState = this.updateState.bind(this);
        this.getFieldOrder = this.getFieldOrder.bind(this);
    };

   componentDidMount() {
    this.updateState();
   };

   updateState () {
    const ls = getAll();
    this.setState({
      tasks: ls,
    });

    const orderField = getOrderBy();
    this.setState({
      orderField
    });
   };

   removeTodo(id) {
     remove(id);
     this.updateState();
   };

   getFieldOrder(field) {
    orderByField(field);
    this.updateState();
  };

    render() {
          
        const { tasks, orderField } = this.state;

        return (
        
          <div className="container">
            <div className="mt-3">
              <h3>Todo List</h3>
              <OrderBy field={orderField} getFieldOrder={ this.getFieldOrder } />
              <table className="table table-striped mt-3">
              <thead>
                  <tr>
                  <th>Task</th>
                  <th>Status</th>
                  <th>Created</th>
                  <th>Actions</th>
                  </tr>
              </thead>
              <tbody>
                {tasks && tasks.map(
                  (todo) => {
                  return (
                    <tr key={todo.id}>
                    <td> { todo.task } </td>
                    <td> { todo.status } </td>
                    <td> { todo.creationDate } </td>
                    <td> 
                        <Link to={`/edit/${todo.id}`}>Edit</Link>
                        &nbsp; &nbsp;
                        <button onClick={() => this.removeTodo(todo.id)}> Remove </button>
                    </td>
                    </tr>
                  )
                  }
                 )
               }
              </tbody>
              </table>
            </div>
          </div>
        
        );
    };
}