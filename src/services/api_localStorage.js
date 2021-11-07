
// NOTE: I've used "local storage as data source" ONLY for dev purpose
// That means: For test, as on this specific web software there is tiny data amount.
// So as we already know, localStorage has not so much space to storage data.

import { idGenerator } from "../utils/IdGenerator";
import { dateCreator } from "../utils/DateCreator";

export const getAll = () => {
    const ls = JSON.parse(localStorage.getItem('tasks')) || [];

    const field = JSON.parse(localStorage.getItem('orderBy')) || '';

    if(field && field !== '') {

      ls.sort(function (a, b) {
      //   return a[field].localeCompare(b[field]);
      if (a[field] < b[field] ) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      };
        return 0;
      });
    };

    return ls
};

export const getOrderBy = () => {

  const field = JSON.parse(localStorage.getItem('orderBy')) || '';
  return field;
};

export const create = (newData) => {
  const ls = getAll();
  const { task, status } = newData;

  const id = idGenerator();
  const creationDate = dateCreator();

  localStorage.setItem('tasks', JSON.stringify([ ...ls, { id, task, status, creationDate }]));

}

export const update = (id, data) => {
    const ls = getAll();

    const indexFound = ls.findIndex((item) => (item.id === parseInt(id, 10)));

    ls[indexFound] = { ...ls[indexFound], ...data };

    localStorage.setItem('tasks', JSON.stringify(ls));
};

export const getById = (id) => {
    const ls = getAll();

    const taskFound = ls.find((item) => item.id === parseInt(id, 10));

    return taskFound;
};

export const remove = (id) => {
    const ls = getAll();

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