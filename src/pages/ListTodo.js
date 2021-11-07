import React from 'react';
import TasksTable from '../components/TasksTable';
import NavBar from '../components/NavBar';

export default class TodoList extends React.Component {
 
  render() {
    return (
    <div>
      <NavBar />
      <TasksTable />
    </div>
    )
  }
}