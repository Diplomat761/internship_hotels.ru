const ageValue = (age) => {
   (age < 14 || age > 90) 
   ? console.log("Мы  НЕ в диапозоне!") 
   : console.log("Мы в диапозоне.");
}

console.log(ageValue(14));


const ageValue_2 = (age) => {
   (!(age >= 14 && age <= 90)) 
   ? console.log("Мы  НЕ в диапозоне!") 
   : console.log("Мы в диапозоне.");
}

console.log(ageValue_2(14));