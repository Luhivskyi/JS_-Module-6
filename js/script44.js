// Пиши код ниже этой строки
const getTotalBalanceByGender = (users, gender) => {
  const balanceByGender = users.filter(user => {
    return user.gender === gender
  });
  const totalBalance = balanceByGender.reduce((accum,user) => {
      return accum + user.balance;
  },0)
  return totalBalance;
};
// Пиши код выше этой строки