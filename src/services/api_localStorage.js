
// NOTE: I've used "local storage as data source" ONLY for dev purpose
// That means: For test, as on this specific web software there is tiny data amount.
// So as we already know, localStorage has not so much space to storage data.

import { idGenerator } from "../utils/IdGenerator";

export const getAll = () => {
    const ls = JSON.parse(localStorage.getItem('tasks')) || [];

    return ls
};

export const create = (newData) => {
  const ls = getAll();
  const { task, status } = newData;

  const id = idGenerator();

  localStorage.setItem('tasks', JSON.stringify([ ...ls, { id, task, status }]));
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

    localStorage.setItem('tasks', JSON.stringify(ls));
};