class Product {
   constructor(name, price, quantity, description) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
      this.description = description;
   }
}

const products = [
   new Product("fdProduct 1", 10, 5, "This is product 1a"),
   new Product("Productor 2", 20, 6, "aThis is product 2c"),
   new Product("Productor 3", 30, 8, "aThis is product 3"),
   new Product("Product 4", 40, 2, "cThis is product 4"),
];

function filterProducts(query) {
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

export default filterProducts;




