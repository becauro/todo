
// NOTE: I've used "local storage as data source" ONLY for dev purpose
// That means: For test, as on this specific web software there is tiny data amount.
// So as we already know, localStorage has not so much space to storage data.

export const getAll = () => {
    const ls = JSON.parse(localStorage.getItem('tasks')) || [];

    return ls
};

export const update = (id, data) => {
    const ls = JSON.parse(localStorage.getItem('tasks')) || [];

    const indexFound = ls.findIndex((item) => (item.id === id));

    ls[indexFound] = data;

    localStorage.setItem('tasks', JSON.stringify(ls));
}

export const getById = (id) => {
    const ls = JSON.parse(localStorage.getItem('tasks')) || [];

    const taskFound = ls.find((item) => item.id === parseInt(id, 10));

    return taskFound;
};
