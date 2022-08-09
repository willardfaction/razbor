// console.log("hello");
/*console.error("hello");
console.warn("hello");*/

// переменные
// let, var, constant
// const birth = "28.04.2002";
// console.log(birth);
// let lastname = "Dzhumashev";
// console.log(lastname);
var firstname = "Aman";
// console.log(firstname);
firstname = "esen";
// console.log(firstname);

// названия переменных
// let 5block; let let - нельзя ставить цифры в начале имени также как и команды
// const RED = "asda"

// let camelcase;
// let color_orange;
// const RED = "#qww1313";
// const $block ="";
// const number10 = 10;

// типы данных
//  1 string
// let str = "lane";
// console.log(str);
// // const typeofstr = typeof str;
// // console.log(typeofstr);
// console.log(typeof str);
// let str1 = "qwe";
// let str2 = "asd";
// let str = "zxc";

// 2 number
// let num1 = 100;
// const pi = 3.14;
// console.log(typeof num1);

// // 3 boolean
// const bool1 = true;
// const bool2 = false;

// 4 null
// let error = null;

// 5 undefined
// let hello;
// console.log(hello);

// 6 object ( object, array)
// object itself
// let user = {
//   name: "Dzhumashev Aman",
//   age: 20,
// };
// console.log(user);
// console.log(user.age);

// console.log(user["name"]);

// array
// let arr = [false, 100, true, {}, [], "hello"];
// console.log(arr[0]);
// console.log(arr.length);

// // 7 symbol
// let id = Symbol("r567u");

// 8 Bigint
//
// let int = 312312313n;

// math operators

//console.log(Boolean(0)); //false
//console.log(Boolean(-1)); //true

// сравнение
// строгое ===
// console.log(3 === 5);
// console.log(3 === 3);

// // нестрогое ==
// // console.log(3 == 3)
// console.log("3" == 3);

// // >, <, =
// console.log(3 < 5);
// console.log(4 >= 4);

// // из string в number

// let elem = "100000";
// console.log(elem);
// console.log(+elem);

// parseInt
// let elem2 = "10000eqwjeqwjeqwjenwqej";
// console.log(parseInt(elem2));

// parseFloat
// let elem3 = "100.200qwewqeqwe";
// console.log(parseFloat(elem3));

// Number
// let elem4 = "1000";
// console.log(Number(elem4));

// // из Number в string
// let num = 8990;
// console.log(num.toString());
// console.log(String(num));

// alert, prompt, confirm
// alert("Hello, user");
let firstName = prompt("Как вас зовут?");
console.log(firstName);
// интерполяция - встроенное выражение
alert(`${firstName}, you are a chad!`);

let value = confirm("Вам есть 18?");
console.log(value);

let num1 = prompt("first number");
let operator = prompt("math operator");
let num2 = prompt("scond number");
let result = eval(num1 + operator + num2);
alert(result);
