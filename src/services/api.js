export const listTodo = () => {
  const tasks = storage.getItem('task');
  return tasks;
};