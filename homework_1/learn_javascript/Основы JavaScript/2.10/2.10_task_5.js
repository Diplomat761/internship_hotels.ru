function sayHi(login) {
   let message = 
   (login == 'Сотрудник') ? 'Привет' :
   (login == 'Директор') ? 'Здравствуйте' :
   (login == '') ? 'Нет логина' : '';
   return message
} 


console.log(sayHi(''));
