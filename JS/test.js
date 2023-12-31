// console.log("hello from test 1");

// ================================================================================$$$$$==========================================================
// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }
// ================================================================================$$$$$==========================================================

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Ppoly";
// let message;

// for (const client of clients) {
//   // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//   // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//   // про успіх і робимо break, щоб далі не шукати
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }

//   // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"
// ================================================================================$$$$$==========================================================
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

let a = 5;
// Присвоєння за значенням, в пам'яті буде створена ще
// одна комірка, в яку буде скопійоване значення 5
let b = a;
console.log(a); // 5
console.log(b); // 5

// Змінимо значення a
a = 10;
console.log(a); // 10
// Значення b не змінилося, оскільки це окрема копія
console.log(b); // 5
a = 12;
console.log(a);
b = a;
console.log(b);