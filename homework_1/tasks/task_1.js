const myModule = {
   capitalizeFirstLetter: function (str) {
     return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
   },
   transformString: function(str) {
      str = str.replace(/\s*([.,!?:;])/g, '$1 ');
      str = str.replace(/([.,!?:;])/g, '$1 ');
      str = str.replace(/\s+/g, ' ');
      return str;
   },
   countWords: function (str) {
     return str.trim().split(/\s+/).length;
   },
   countUniqueWords: function(text) {
      const words = text.split(/[ ,.!?]+/);
      const wordCounts = {};

      for (const word of words) {
        if (word in wordCounts) {
          wordCounts[word]++;
        } else {
          wordCounts[word] = 1;
        }
      }
      for (const word in wordCounts) {
        console.log(`${word}: ${wordCounts[word]}`);
      }
    }
 };

console.log(myModule.capitalizeFirstLetter('HSDHDSHDS'));
console.log(myModule.transformString('Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.')); 
console.log(myModule.countWords('Вот пример строки,в которой используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно. Если есть лишние подряд идущие пробелы, они должны быть устранены.'));
console.log(myModule.countUniqueWords('Текст, в котором тоже слово текст несколько раз встречается и слово тоже'));