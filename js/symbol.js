const a = 111;
let s = Symbol()
console.log(typeof s)
//这些数据可以分为原始数据类型和引用数据类型：

//栈：原始数据类型（Undefined、Null、Boolean、Number、String）
///堆：引用数据类型（对象、数组和函数）
//区别在于存储位置不同
let x = Symbol('qqqqqqqq')
console.log(x.toString);
console.log(typeof x);
//判断数据类型一共几种方法？
console.log(typeof 2);               // number
console.log(typeof true);            // boolean
console.log(typeof 'str');           // string
console.log(typeof []);              // object    
console.log(typeof function () { });    // function
console.log(typeof {});              // object
console.log(typeof undefined);       // undefined
console.log(typeof null);            // object
//其中数组、对象、null都会被判断为object，其他判断都正确。

//（2）instanceof

//   instanceof可以正确判断对象的类型，
//其内部运行机制是判断在其原型链中能否找到该类型的原型。
console.log(2 instanceof Number);                    // false
console.log(true instanceof Boolean);                // false 
console.log('str' instanceof String);                // false 

console.log([] instanceof Array);                    // true
console.log(function () { } instanceof Function);       // true
console.log({} instanceof Object);                   // true


