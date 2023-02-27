// Example 1 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function calcBMI({weight, height}) {
// // console.log('weight',weight);
// // console.log('height',height);
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));
//     return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// console.log(calcBMI({
//     weight: '88,3',
//     height: '1.75'
// }));
// console.log(calcBMI({
//     weight: '68,3',
//     height: '1.65'
// }));
// console.log(calcBMI({
//     weight: '118,3',
//     height: '1.95'
// }));


// Example 2 - Глибока деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function getBotReport({ companyName, bots: { repairBots, defenceBots } }) {
//     // console.log(companyName);
//     // console.log(repairBots);
//     // console.log(defenceBots);
//     return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// console.log(getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: { repairBots: 150, defenceBots: 50 }
// }));

// Example 3 - Деструктуризація
// Напиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName та stock та виводила репорт про кількість товарів на складі будь-якої компанії.

// function getStockReport({ companyName, stock }) {
//     const values = Object.values(stock);

//     let total = 0;
//     for (const value of values) {
//         total += value;
//     }

//    return `${companyName} has ${total} items in stock`;
   
//  }

// console.log(
//     getStockReport({
//         companyName: 'Cyberdyne Systems',
//         stock: {
//             repairBots: 150,
//             defenceBots: 50,
//         },
//     }),
// ); //"Cyberdyne Systems has 200 items in stock"

// console.log(
//     getStockReport({
//         companyName: 'Belacci',
//         stock: {
//             shoes: 20,
//             skirts: 10,
//             hats: 5,
//         },
//     }),
// ); //"Belacci has 35 items in stock"


// Example 4 - Операція spread
// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.

// function createContact(partialContact) {
//     return {
//         id: generateId(),
//         createdAt: new Date(),
//         list: 'default',
//         ...partialContact
//     }
//  }

// console.log(
//     createContact({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }),
// );
// console.log(
//     createContact({
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }),
// );

// function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
// }


// Example 5 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// function transformId({ firstName, lastName, ...props }) {
//     // console.log(firstName);
//     // console.log(lastName);
//     // console.log(props);


//     props.fullName = firstName + ' ' + lastName
//     return props
//     // return {
//     //     fullName: `${firstName} ${lastName}`,
//     //     ...props
//     // }
// }

// console.log(
//   transformId({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   }),
// );

// console.log(
//   transformId({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   }),
// );