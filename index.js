import myModule from './modules/MyModule.js';
import bigIntOps from './modules/BigIntOps.js';
import productMetod from './modules/FilterProducts.js';


// Задание 1
console.log("Задание 1: ");
myModule.capitalizeFirstLetter('СТАЖИРОВОЧКА');
myModule.transformString('Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.');
myModule.countWords('Если я всё правильно написал, то тут выведется число десять');
myModule.countUniqueWords('Текст, в котором тоже слово текст несколько раз встречается и слово тоже');

// Задание 2
console.log("Задание 2: ");
const a = '15665131564564561315645645613464564';
const b = '9876543215456465134854984954646';

bigIntOps.add(a, b);
bigIntOps.subtract(a, b);
bigIntOps.multiply(a, b);
bigIntOps.divide(a, b);

// Задание 3
console.log("Задание 3: ");

const filter_1 = "name-contains-an&price->=-20&quantity->=-2&description-ends-sty";
const filter_2 = "name-starts-a&quantity-=-8";

console.log(productMetod.filter(filter_1));
console.log(productMetod.filter(filter_2));
