export const listTodo = () => {
  const tasks = localStorage.getItem('tasks');
  return JSON.parse(tasks);
};