// Пиши код ниже этой строки
const calculateTotalBalance = users => {
 const totalBalance = users.reduce(function(balance,user){
return balance + user.balance;
},0);
  return totalBalance;
};
// Пиши код выше этой строки