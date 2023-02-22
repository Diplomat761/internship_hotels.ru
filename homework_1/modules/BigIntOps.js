const bigIntOps = {
   // Сложение и преобразование результата в строку
   add: (a, b) => console.log("Сложение: " + (BigInt(a) + BigInt(b) + '')),
   // Вычитание и преобразование результата в строку
   subtract: (a, b) => console.log("Вычетание: " + (BigInt(a) - BigInt(b) + '')),
   // Умножение и преобразование результата в строку
   multiply: (a, b) => console.log("Умножение: " + (BigInt(a) * BigInt(b) + '')),
   // Деление и преобразование результата в строку
   divide: (a, b) => console.log("Деление: " + (BigInt(a) / BigInt(b) + '')),
};

export default bigIntOps;





