// Пиши код ниже этой строки
const getActiveUsers = (users) => {
  
 const isActiveUsers = users.filter(user => {
                                    
 return user.isActive === true;
 })
    return isActiveUsers;
         
};
// Пиши код выше этой строки
