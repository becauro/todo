import React from 'react';
import { Link } from 'react-router-dom';

export default class TodoList extends React.Component {
    constructor() {
        super();

        let tasks = [ {id: 1, task: 'Estudar react', status: 'pedente'}, 
        {id: 2, task: 'Estudar heroku', status: 'pronto'}]

        this.state = {
          tasks: tasks
        }
    };

    componentWillUnmount() {
      console.log('TodoList desmontando');
    }

    render() {
      const { tasks } = this.state;
    
        const rows = tasks && tasks.map(
          (todo) => {
            return (
            <tr key={todo.id}>
            <td>
                { todo.task }
            </td>
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
        <React.Fragment>
          <div className="container">
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
        </React.Fragment>
        )
    }
}