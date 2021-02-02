// Пиши код ниже этой строки
const isEveryUserActive = (users) => {
const everyUserActive = users.every(function(user){
  return user.isActive;
  }) 
return everyUserActive;
};
// Пиши код выше этой строки