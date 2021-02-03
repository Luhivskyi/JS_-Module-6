// Пиши код ниже этой строки
const sortByDescendingFriendCount = users => {
  const friendCount = [...users].sort(function(prevCount, nextCount){
  return nextCount.friends.length - prevCount.friends.length;
   })
 return friendCount; 
};
// Пиши код выше этой строки