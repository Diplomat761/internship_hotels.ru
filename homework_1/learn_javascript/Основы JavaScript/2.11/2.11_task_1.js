const ageValue = (age) => {
   (age >= 14 && age <= 90) 
   ? console.log("Мы в диапозоне!") 
   : console.log("Мы где-то за пределами.");
}

console.log(ageValue(13));