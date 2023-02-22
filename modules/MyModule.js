const myModule = {
   capitalizeFirstLetter: function (str) {
      // Возвращаем первый символ строки, ставим его в верхний регистр + оставшаяся часть, а все  остальные символы строки в нижний регистр
      return console.log("1.1: " + str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());;
   },
   transformString: function (str) {
      // Удаляем пробелы перед знаками препинания
      str = str.replace(/\s*([.,!?:;])/g, '$1 ');
      // Добавляем пробелы после знаков препинания
      str = str.replace(/([.,!?:;])/g, '$1 ');
      // Добавляем пробелы между словами
      str = str.replace(/\s+/g, ' ');
      return console.log("1.2: " + str);;
   },
   countWords: function (str) {
      // Удаляем все пробелы,разбиваем строку на массив слов и возвращаем колличество элементов в массиве 
      return console.log("1.3: " + str.trim().split(/\s+/).length);;
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
      console.log("1.4: ");
      for (const word in wordCounts) {

         console.log(`${word}: ${wordCounts[word]}`);
      }
   }
};

export default myModule;


