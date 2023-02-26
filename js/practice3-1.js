// Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user['premium'] = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//     console.log(`${key} : ${user[key]}`)
// }
// console.log(keys);


// Example 2 - метод Object.values()
// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.


// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };
// let sum = 0;
// for (const key in salaries) {
//     sum += salaries[key];
//     // console.log(salaries[key]);
// }

// const keys = Object.keys(salaries);
// for (const key of keys) {
//     console.log(key);
//     sum += salaries[key]
// }
// console.log(sum);

// const values = Object.values(salaries);
// for (const value of values) {
//     sum += value;
// }
// console.log(sum);


// Example 3 - Масив об'єктів
// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта
// Щоб створити коментар, потрібно /**
 
//  */
// /**
//  * Find stone in array and calc total price
//  * price * quantity
//  * @param {Array} stones
//  * @param {String} stoneName
//  * @returns {Number || String} price || error message
//  */
// function calcTotalPrice(stones, stoneName) {
//     for (const stone of stones) {
//         if (stone.name === stoneName) {
//             return stone.price*stone.quantity
//         }
//     }
//     return 'Not found'
// }

// const stones = [
//     { name: 'Смарагд', price: 1300, quantity: 4 },
//     { name: 'Діамант', price: 2700, quantity: 3 },
//     { name: 'Сапфір', price: 400, quantity: 7 },
//     { name: 'Щебінь', price: 200, quantity: 2 },
// ];
// console.log(calcTotalPrice(stones, 'Смарагд'));


// Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

// /*
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };
// Object.freeze(Transaction)
// //  * Кожна транзакція це об'єкт із властивостями: id, type та amount
// //  */

// const account = {
//     // Поточний баланс рахунку
//     balance: 0,

//     // Історія транзакцій
//     transactions: [{ id: 123, amount: 1200, type: 'deposit' }],

//     /*
// //      * Метод створює та повертає об'єкт транзакції.
// //      * Приймає суму та тип транзакції.
// //      */
//     createTransaction(amount, type) {
//         return {
//             id: Math.random(),
//             amount, //amount: 1000
//             type
//         }
//     },

//     /*
// //      * Метод, що відповідає за додавання суми до балансу.
// //      * Приймає суму транзакції.
// //      * Викликає createTransaction для створення об'єкта транзакції
// //      * після чого додає його до історії транзакцій
// //      */
//     deposit(amount) {
//         this.balance += amount;
//         const transaction = this.createTransaction(amount, Transaction.DEPOSIT)
//         console.log(transaction);
//         this.transactions.push(transaction)
//     },

//      /*
// //      * Метод, що відповідає за зняття суми з балансу.
// //      * Приймає суму транзакції.
// //      * Викликає createTransaction для створення об'єкта транзакції
// //      * після чого додає його до історії транзакцій.
// //      *
// //      * Якщо amount більше ніж поточний баланс, виводь повідомлення
// //      * про те, що зняття такої суми не можливе, недостатньо коштів.
// //      */
//     withdraw(amount) {
//         if (amount > this.balance) {
//             return 'зняття такої суми не можливе, недостатньо коштів'
//         }

//         this.balance -= amount
//         const transaction = this.createTransaction(
//             amount, Transaction.WITHDRAW
//         )
//         this.transactions.push(transaction)
//     },

//     /*
// //      * Метод повертає поточний баланс
// //      */
//     getBalance() {
// return this.balance
//     },

//     /*
// //      * Метод шукає та повертає об'єкт транзакції по id
// //      */
//     getTransactionDetails(id) {
//         for (const transaction of this.transactions) {
//             if (transaction.id === id) {
              
//                 return transaction;
//             }
            
//         }
//         return 'Not found'
//     },

//      /*
// //      * Метод повертає кількість коштів
// //      * певного типу транзакції з усієї історії транзакцій
// //      */
//     getTransactionTotal(type) {
//         let total = 0;
//         for (const transaction of this.transactions) {
//             if (transaction.type === type) {
//                 total += transaction.amount;
//             }
//         }
//         return total
//     }
// };

// account.deposit(1500)
// account.deposit(1200)
// account.withdraw(500)
// console.log(account);
// console.log(account.getBalance());
// // console.log(account.getTransactionDetails(1234));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
