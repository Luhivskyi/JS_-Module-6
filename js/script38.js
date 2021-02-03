// Пиши код ниже этой строки
const sortByAscendingBalance = users => {
 const ascendingBalance = users.sort(function(prevBalance, nextBalance){
  return prevBalance.balance - nextBalance.balance;
   })
 return ascendingBalance;
};
// Пиши код выше этой строки