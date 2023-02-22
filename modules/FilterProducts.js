class Product {
   constructor(name, price, quantity, description) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
      this.description = description;
   }

}

const products = [
   new Product("apple", 10, 8, "it has a lot of iron"),
   new Product("banana", 20, 6, "yellow, long and tasty"),
   new Product("avocado", 30, 8, "perfect for breakfast"),
   new Product("mango", 40, 2, "beautiful, juicy, tasty"),
];

const productMetod = {
   filter: (query) => {
      // Разбиваем запрос на части
      const parts = query.split("&");
      // Фильтруем массив
      return products.filter((product) => {
         // Проверяем, удовлетворяет ли каждый фрагмент запроса условиям
         return parts.every((part) => {
            // Разбиваем каждый фрагмент на три части
            const [field, operator, value] = part.split("-");
            // Выбираем нужный оператор и сравниваем значение поля с заданным значением
            switch (operator) {
               case "contains":
                  return product[field].includes(value);
               case "starts":
                  return product[field].startsWith(value);
               case "ends":
                  return product[field].endsWith(value);
               case "<":
                  return product[field] < Number(value);
               case "=":
                  return product[field] === Number(value);
               case ">":
                  return product[field] > Number(value);
               case "<=":
                  return product[field] <= Number(value);
               case ">=":
                  return product[field] >= Number(value);
               default:
                  return false;
            }
         });
      });
   }
}

export default productMetod;






