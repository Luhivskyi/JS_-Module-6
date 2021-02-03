// Пиши код ниже этой строки
const sortByName = users => {
   const byName = [...users].sort(function(prevName, nextName){
  return prevName.name.localeCompare(nextName.name)
   })
 return byName; 
};
// Пиши код выше этой строки