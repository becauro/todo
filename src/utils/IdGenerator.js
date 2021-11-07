export const idGenerator =  () => {
    const ls = JSON.parse(localStorage.getItem('tasks')) || [];

    let done = false;
    let newId = ls.length + 1;


    const availableId = () => ls.every((item) => item.id !== newId);
  
    while (!done) {

      const result = availableId();

      if(result) {
          done = true;
      } else {
          newId += 1;
      };

    };

    return newId;

}

 