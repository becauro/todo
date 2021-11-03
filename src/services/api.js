export const listTodo = () => {
  const tasks = localStorage.getItem('tasks');
  return JSON.parse(tasks);
};

export const createTodo = (data) => {
  let getTasks = listTodo();
  // If doest not fill LS from app, IF contions will be neceessary here to verify if getTaks is filled;
  getTasks.push(data);
  localStorage.setItem('tasks', JSON.stringify(getTasks));
};