import React from 'react';
import { TodoForm } from "../components/UpdateTodoForm.js";

export default class EditTodo extends React.Component {

    onSubmit = () => {
        const { history: { push } } = this.props;
        push("/");
    
    };

    render() {
        const { id }  = this.props.match.params;

        return (
            <div className="container">
              <div className="mt-3">
              <h3>Update Todo Item</h3>
                <TodoForm taskId={id} onSubmit={this.onSubmit} />
              </div>
            </div>
        );
      };
}