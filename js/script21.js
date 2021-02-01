// Пиши код ниже этой строки
const getFriends = (users) => {
  const allFriends = users.flatMap(user => user.friends);
  const uniqueFriends = allFriends.filter(
   (user, index, friends) => friends.indexOf(user) === index);
  return uniqueFriends;
};
// Пиши код выше этой строки
