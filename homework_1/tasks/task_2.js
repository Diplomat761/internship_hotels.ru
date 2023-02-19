const BigIntOps = {
   add: (a, b) => BigInt(a) + BigInt(b) + '',
   subtract: (a, b) => BigInt(a) - BigInt(b) + '',
   multiply: (a, b) => BigInt(a) * BigInt(b) + '',
   divide: (a, b) => BigInt(a) / BigInt(b) + '',
};
 

const a = '15665131564564561315645645613';
const b = '98765432154564651348549849';


console.log(BigIntOps.multiply(a, b)); 
 