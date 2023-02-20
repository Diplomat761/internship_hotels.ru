const myModule = {
   capitalizeFirstLetter: function (str) {
      // Возвращаем первый символ строки, ставим его в верхний регистр + оставшаяся часть, а все  остальные символы строки в нижний регистр
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
   },
   transformString: function (str) {
      // Удаляем пробелы перед знаками препинания
      str = str.replace(/\s*([.,!?:;])/g, '$1 ');
      // Добавляем пробелы после знаков препинания
      str = str.replace(/([.,!?:;])/g, '$1 ');
      // Добавляем пробелы между словами
      str = str.replace(/\s+/g, ' ');
      return str;
   },
   countWords: function (str) {
      // Удаляем все пробелы,разбиваем строку на массив слов и возвращаем колличество элементов в массиве 
      return str.trim().split(/\s+/).length;
   },
   countUniqueWords: function (text) {
      // Разбиваем текст на массив слов, и приводим к нижнему регистру 
      const words = text.toLowerCase().split(/[ ,.!?]+/);
      // Создаем пустой объект для подсчета повторений
      const wordCounts = {};
      // Проходим по массиву слов и увеличиваем счетчики для каждого слова
      for (const word of words) {
         if (word in wordCounts) {
            wordCounts[word]++;
         } else {
            wordCounts[word] = 1;
         }
      }
      // Выводим результаты в консоль
      for (const word in wordCounts) {
         console.log(`${word}: ${wordCounts[word]}`);
      }
   }
};

console.log(myModule.capitalizeFirstLetter('HSDHDSHDS'));
console.log(myModule.transformString('Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.'));
console.log(myModule.countWords('Вот пример строки,в которой используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно. Если есть лишние подряд идущие пробелы, они должны быть устранены.'));
console.log(myModule.countUniqueWords('Текст, в котором тоже слово текст несколько раз встречается и слово тоже'));