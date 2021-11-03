let tasks = [ {id: 1, task: 'Estudar react', status: 'pedente'}, 
{id: 2, task: 'Estudar heroku', status: 'pronto'}];

export const fillLocalstorage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };


  // fillLocalstorage();