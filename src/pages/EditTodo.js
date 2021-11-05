import React from 'react';
import { TodoForm } from "../components/UpdateTodoForm.js";

export default class EditTodo extends React.Component {
    constructor() {
        super();
    };

    // componentDidMount() {

    //  const { id }  = this.props.match.params;

    //     console.log('Edit todo: qui o ID pegado da URL:');
    //     console.log(id);
    // };

    onSubmit = () => {
        const { history: { push } } = this.props;
        push("/");
    
    };

    render() {
        const { id }  = this.props.match.params;

        console.log('Edit todo: qui o ID pegado da URL:');
        console.log(id);
        return (
            <div className="container">
              <div className="mt-3">
              <h3>Create Todo Item</h3>
                <TodoForm onSubmit={this.onSubmit} />
              </div>
            </div>
        );
      };
}