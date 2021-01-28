function changeEven(numbers, value) {
    // Пиши код ниже этой строки
  let newArray = [];
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] % 2 === 0) {
        newArray.push(numbers[i] + value);
      } else{
        newArray.push(numbers[i])
        }
    }
  return newArray;
    // Пиши код выше этой строки
  }