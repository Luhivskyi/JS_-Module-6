// Пиши код ниже этой строки
const getUsersWithFriend = (users, friendName) => {
 const filteredFriends = users.filter(user => {
   return user.friends.includes(friendName);
  });
  return filteredFriends;
};
// Пиши код выше этой строки
