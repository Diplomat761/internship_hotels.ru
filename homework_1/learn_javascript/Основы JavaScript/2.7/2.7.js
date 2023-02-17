let str = '123';

let num = Number(str);

console.log(num);
console.log(typeof(num));


// Если строка не может быть явно приведена к числу,
// то результатом преобразования будет NaN.

let info = 'Что угодно, но не число';

let numInfo = Number(info);

console.log(numInfo);
console.log(typeof(numInfo));


console.log(Number(true));
console.log(Number(false));

