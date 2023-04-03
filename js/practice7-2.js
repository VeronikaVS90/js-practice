// задача на логіку 1-5 модуль
// Створити функцію, яка приймає 1 параметр - масив продуктів, і повертає мутований масив
// Потрібно перебрати масив, і, якщо він має об'єкти, в яких дублюються id, то quantity цих елементів потрібно сплюсувати
// а ті об'єкти, в яких id співпав, видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)

const products = [
  {
    id: "sku1",
    qty: 1,
  },
  {
    id: "sku2",
    qty: 2,
  },
  {
    id: "sku3",
    qty: 3,
  },
  {
    id: "sku1",
    qty: 6,
  },
  {
    id: "sku1",
    qty: 8,
  },
  {
    id: "sku1",
    qty: 6,
  },
  {
    id: "sku2",
    qty: 19,
  },
  {
    id: "sku4",
    qty: 1,
  },
  {
    id: "sku1",
    qty: 8,
  },
];

function foo(arr) {
    for (let i = 0; i < arr.length; i += 1){
    
        for (let j = i + 1; j < arr.length; j += 1) {
            if (arr[i].id === arr[j].id) {
                arr[i].qty += arr[j].qty;
                arr.splice(j, 1);
                j -= 1;
            }
        }
    }   
}
foo(products);
console.log(products);