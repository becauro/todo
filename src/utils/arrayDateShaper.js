export const dateShaper = (strDate) => {

  
  const date = new Date(strDate);
  
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear());
  
  const hours = String(date.getHours());
  const min = String(date.getMinutes());

  const ModifiedDate = day + '/' + month + '/' + year + ' || ' + hours + 'h:' + min + 'min';
    
  return ModifiedDate;
};



export const arrayDateShaper = (array) => {
  
  const ModifiedArray = array.map((item) => { 
    item.creationDate = dateShaper(item.creationDate);
    return item;
  });

  return ModifiedArray
}