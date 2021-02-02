// Пиши код ниже этой строки
const isAnyUserActive = users => {
   const anyUserActive = users.some(function(user){
  return user.isActive;
  }) 
return anyUserActive;
};
// Пиши код выше этой строки