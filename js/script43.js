// Пиши код ниже этой строки
const getSortedFriends = users => {
  return users.flatMap(user => user.friends)
  .filter(
   (user, index, friends) => friends.indexOf(user) === index)
  .sort((prevName,nextName) => prevName.localeCompare(nextName))  
};
// Пиши код выше этой строки