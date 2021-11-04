import React from 'react';
import { Link } from 'react-router-dom';

export default class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
          tasks: []
        }
    };

   componentDidMount() {
  
    const ls = JSON.parse(localStorage.getItem('tasks')) || [];

      this.setState({
       tasks: ls,
       });
  
   };

    render() {
      const { tasks } = this.state;

        const rows = tasks && tasks.map(
          (todo) => {
            return (
            <tr key={todo.id}>
            <td> { todo['task'] } </td>
            <td>
              <Link to={`/edit/${todo.id}`}>Edit</Link>
            </td>
            <td>
                { todo.status }
            </td>
            </tr>
          )
          }
        );

        return (
        
          <div className="container">
            <div>
              <h3>testando</h3>
              <ul>
              { tasks.map(
                  ({ task }, index) => {
                    return (
      
                      <li key={index}> { task } </li>
                   
                    )
                  }
                ) }
              </ul>
            </div>
            <div className="mt-3">
              <h3>Todo List</h3>
              <table className="table table-striped mt-3">
              <thead>
                  <tr>
                  <th>Task</th>
                  <th>Action</th>
                  <th>Status</th>
                  </tr>
              </thead>
              <tbody>
                { rows }
              </tbody>
              </table>
            </div>
          </div>
        
        )
    }
}