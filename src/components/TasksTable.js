import React from "react";
import { Link } from 'react-router-dom';
import { getAll, remove } from '../services/api_localStorage';

export default class TasksTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          tasks: [],
        };
        this.removeTodo = this.removeTodo.bind(this);
        this.updateStorage = this.updateStorage.bind(this);
    };

   componentDidMount() {
  
    const ls = getAll();

      this.setState({
       tasks: ls,
       });
   };

   updateStorage () {
    const ls = getAll();
    this.setState({
      tasks: ls,
    });
   }

   removeTodo(id) {
     remove(id);
     this.updateStorage();
   };   

    render() {
          
        const { tasks } = this.state;

        return (
        
          <div className="container">
            <div className="mt-3">
              <h3>Todo List</h3>
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
                  <td> { todo['task'] } </td>
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
        
        )
    }
}