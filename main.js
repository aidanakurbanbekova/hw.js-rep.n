//1) Напишите функцию JavaScript, которая принимает
// массив из списка названий стран в качестве входных
// данных и возвращает самое длинное название страны
// в качестве выходных данных.

// const getLongestCountryName =["Россия", "Украина", "Соединённые Штаты Америки"];
// const country = getLongestCountryName.reduce((acc,element)=>{
//     if (acc.length < element.length){
//         return[ element]
//     }
//     return acc;
//
// },'');
// console.log(country)

// 2 **************************************
// Напишите функцию alphabetOrder(str), которая возвращает переданную строку с буквами в алфавитном порядке.
// Например вызывая функцию  alphabetOrder('alphabetical')
// Ожидаемый результат: 'aaabcehillpt'


// function alphabetOrder(srt) {
//     return str.split('').sort().join('');
// }
// const str = ('alphabetical');
// const qwerty = alphabetOrder(str);
// console.log(qwerty);

// 3 ***********************************************
// Используя метод map() напишите код, который получает из массива
// строк новый массив, содержащий их длины.
// Например: const vegetables =
// ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// На выходе должно быть: [7,4,7,8]
//
// const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// const vegetabLength = vegetables.map ((len,idx)=>{
//     return len.length;
// });
// console.log(vegetabLength);

//  4 **************************************************
// 4) Напишите функцию generateNumbers(start, len),
// которая генерирует массив заданной длины len,
// заполненный целыми числами, где каждое число больше
// предыдущего на единицу.
// Например вызывая функцию generateNumbers(0, 5)
// Ожидаемый результат: [0,1,2,3,4]
// generateNumbers(-5, 4)  // -> [-5,-4,-3,-2]

// let result = [];
// function generateNumbers(start, len) {
//     for (let i = 0; i < len; i++) {
//         result.push(start + i);
//     }
//     return result;
// }
// console.log(generateNumbers(0,5))


// 5 ******************************************
//5) Напишите функцию, которая возвращает новый
// объект без указанных значений.
// const without = (object, ...args) => {
//     // Напишите здесь свое решение
// }
//Например дан объект const data = { a: 1, b: 2, c: 3 }
// и при вызове функции without(data, 'b', 'c')
//  **Ожидаемые результат: { a: 1 }**

// const data =  { a: 1, b: 2, c: 3 };
// const without = (object, ...args) => {
//     const newObject = {};
//     for (const key in object) {
//         if (!args.includes(key)) {
//             newObject[key] = object[key];
//         }
//     }
//     return newObject;
// }
//
// const result = without(data, 'b', 'c');
// console.log(result);