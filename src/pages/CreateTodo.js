import React from 'react';
import { TodoForm } from "../components/TodoForm";

export default class CreateTodo extends React.Component {
    constructor() {
      super();
      this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit = (data) => {
      // await createTodo(data)

      // DEBUGGING:
      const { history: { push } } = this.props;
      console.log('data em OnSubmit():');
      console.log(data);
      push("/");

    
    };

    render() {
        return (
            <div className="container">
              <div className="mt-3">
              <h3>Create Todo Item</h3>
                <TodoForm onSubmit={this.onSubmit} />
              </div>
            </div>
        );
    }
}