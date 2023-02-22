import strOps from './modules/StrOps.js';
import bigIntOps from './modules/BigIntOps.js';



// Задание 1
strOps.capitalizeFirstLetter('СТАЖИРОВОЧКА');
strOps.transformString('Вот   пример строки  ,в которой     используются знаки   препинания  .');
strOps.countWords('Если я всё правильно написал, то тут выведется число десять');
strOps.countUniqueWords('Текст, в котором тоже слово текст несколько раз встречается и слово тоже');


// Задание 2
const a = '15665131564564561315645645613464564';
const b = '9876543215456465134854984954646';

bigIntOps.add(a, b);
bigIntOps.subtract(a, b);
bigIntOps.multiply(a, b);
bigIntOps.divide(a, b);



