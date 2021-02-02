// Пиши код ниже этой строки
const getUserWithEmail = (users, email) => {
 const userWithEmail = users.find(function(user) {
    return user.email === email;
  }) 
 return userWithEmail;
};
// Пиши код выше этой строки
