export const dateCreator = () => {
    
  const data = new Date();

  const day = String(data.getDate()).padStart(2, '0');

  const month = String(data.getMonth() + 1).padStart(2, '0');

  const year = data.getFullYear();

  const date = day + '/' + month + '/' + year;
    
  return date
}