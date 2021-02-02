// Пиши код ниже этой строки
const getInactiveUsers = (users) => {
  const isNotActiveUsers = users.filter(user => {
                                    
 return user.isActive === false;
 })
    return isNotActiveUsers; 
};
// Пиши код выше этой строки
