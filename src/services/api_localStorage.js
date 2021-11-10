
// NOTE: I've used "local storage as data source" ONLY for dev purpose
// That means: For test, once this specific web software there is tiny of data amount (megaBytes).
// So as we already know, localStorage has not so much space to storage data.

import { idGenerator } from "../utils/IdGenerator";
import { arrayDateShaper } from "../utils/arrayDateShaper";

export const getAll = () => {
  let ls = JSON.parse(localStorage.getItem('tasks')) || [];

  const field = JSON.parse(localStorage.getItem('orderBy')) || '';

  if(field !== 'creationDate') {
    ls.sort(function (a, b) {
    if (a[field].toUpperCase() < b[field].toUpperCase() ) {
      return -1;
    } else if (a[field].toUpperCase() > b[field].toUpperCase()) {
      return 1;
    };
      return 0;
    });

  ls = arrayDateShaper(ls);
  return ls
  };

  // If "field" is not equals "creationDate", maybe it can be equals so now: 

  if(field === 'creationDate') {
  ls.sort(function (a, b) {

    if (new Date(a[field]) < new Date(b[field])) {
      return -1;
    } else if (new Date(a[field]) > new Date(b[field])) {
      return 1;
    };
      return 0;
    });
  
  // Before return array, modify date shape like "dd/mm/yyyy" (kind of "Brazilian shape"):
  ls = arrayDateShaper(ls);
  return ls
  };

  // If it get here, that means the order field is not checked already, thus it is a black string ('')

  return ls;

};

export const getOrderBy = () => {

  const field = JSON.parse(localStorage.getItem('orderBy')) || '';
  return field;
};

// The data are stored in unordered mode. The functions access "database" use "getAllNotOrdered()" for that.

export const getAllNotOrdered = () => {
  let ls = JSON.parse(localStorage.getItem('tasks')) || [];

  return ls
}

export const create = (newData) => {
  const ls = getAllNotOrdered();
  const { task, status } = newData;

  const id = idGenerator();
  const creationDate = new Date();

  localStorage.setItem('tasks', JSON.stringify([ ...ls, { id, task, status, creationDate }]));

};

export const update = (id, data) => {
    const ls = getAllNotOrdered();

    const indexFound = ls.findIndex((item) => (item.id === parseInt(id, 10)));

    ls[indexFound] = { ...ls[indexFound], ...data };

    localStorage.setItem('tasks', JSON.stringify(ls));
};

export const getById = (id) => {
    const ls = getAllNotOrdered();

    const taskFound = ls.find((item) => item.id === parseInt(id, 10));

    return taskFound;
};

export const remove = (id) => {
    const ls = getAllNotOrdered();

    const indexFound = ls.findIndex((item) => (item.id === id));

    ls.splice(indexFound, 1);

    if(ls.length === 0) {
      return localStorage.removeItem('tasks');
    };

    localStorage.setItem('tasks', JSON.stringify(ls));
};

  export const orderByField = (field) => {

  localStorage.setItem('orderBy', JSON.stringify(field));

}