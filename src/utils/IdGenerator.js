export const idGenerator =  () => {
    const ls = JSON.parse(localStorage.getItem('tasks')) || [];

    let done = false;
    let newId = ls.length + 1;

    while (!done) {

        const available = ls.every((item) => item.id !== newId);

        if(available) {
            done = true;
        } else {
            newId += 1;
        };

    }; 

    return newId;

}