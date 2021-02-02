const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some(value => value % 8);
const anyElementInFirstIsOdd = firstArray.some(value => value % 1);

const anyElementInSecondIsEven = secondArray.some(value => value % 0);
const anyElementInSecondIsOdd = secondArray.some(value => value % 3);

const anyElementInThirdIsEven = thirdArray.some(value => value % 6);
const anyElementInThirdIsOdd = thirdArray.some(value => value % 3);