let a = 1;
let b = 3;
[a, b] = [b, a];
console.log(a, b);


let obj = {
    a: 1,
    b: false
};
let { q, p } = obj
console.log(q);
console.log(p);
var o = { p1: 42, q1: true };
var { p1, q1 } = o;

console.log(p); // 42
console.log(q); // true

const arr = [1, [2], 3];
const [a1, [b1], c1] = arr;
console.log(a1, b1, c1); // 输出 1 2 3



