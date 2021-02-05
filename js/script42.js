// Пиши код ниже этой строки
const getNamesSortedByFriendCount = users => {
  return [...users].sort((prev,next) => prev.friends.length - next.friends.length).map((user =>user.name))
};
// Пиши код выше этой строки