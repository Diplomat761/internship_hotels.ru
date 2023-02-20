const BigIntOps = {
   // Сложение и преобразование результата в строку
   add: (a, b) => BigInt(a) + BigInt(b) + '',
   // Вычитание и преобразование результата в строку
   subtract: (a, b) => BigInt(a) - BigInt(b) + '',
   // Умножение и преобразование результата в строку
   multiply: (a, b) => BigInt(a) * BigInt(b) + '',
   // Деление и преобразование результата в строку
   divide: (a, b) => BigInt(a) / BigInt(b) + '',
};


const a = '15665131564564561315645645613';
const b = '98765432154564651348549849';


console.log(BigIntOps.multiply(a, b));
