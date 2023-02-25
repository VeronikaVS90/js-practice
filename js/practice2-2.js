// Example 1 - Індекс маси тіла
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// function calcBMI(weight, height) {
//     weight = Number(weight.replace(',', '.'));
//     height = Number(height.replace(',', '.'));


//     // return weight/Math.pow(height, 2)
//     return Number((weight / height ** 2).toFixed(1))
// }

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8


// Example 2 - Найменше з чисел
// Напиши функцію min(a,b), яка повертає найменше з чисел a та b.

// function min(a, b) {
//     if (a > b) {
//         return b;
//     }
//     return a
// }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1


// Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
//     dimensions = dimensions.split(' ');

//     // const first = Number(dimensions[0]);
//     // const second = Number(dimensions[1]);

//     // return first * second;

//     return Number(dimensions[0]) * Number(dimensions[1]);
    
// }

// console.log(getRectArea('8 11'));
// console.log(getRectArea('18 11'));


// Example 4 - Логування елементів
// Напиши функцію logItems(items), яка отримує масив та використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення у форматі <номер елемента> - <значення елемента>. Нумерація елементів повинна починатися з 1.

// Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для індексу 2 -'Poly' виведе  3 - Ajax.

// function logItems(items) {
//     console.log('-------------');
//     // for (let i = 0, num = 1; i < items.length; i += 1, num += 1){
//     //     console.log(`${num} - ${items[i]}`);
//     // }

//     for (let i = 0; i < items.length; i += 1){
//         console.log(`${i+1} - ${items[i]}`);
//     }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);