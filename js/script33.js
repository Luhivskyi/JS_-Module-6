// Пиши код ниже этой строки
const getTotalFriendCount = users => {
    return users.reduce(function(total,user){
      return total + user.friends.length
  },0) 
};
// Пиши код выше этой строки