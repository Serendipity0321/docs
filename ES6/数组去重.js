

//set构造函数 生成数据结构
//Set函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。
let arr = new Set();
[1, 3, 2, 12, 3, 2, 1, 3, 234, 4, 1, 4, 2, 342, 2, 1].forEach(x => arr.add(x));
for (let i of arr) {
    console.log(i);
}

let arr1 = new Set([1, 2, 3, 1, 2, 3, 1, 1, 23, 1, '1', 2]);
// [...set]
console.log(arr1);
console.log(...new Set([1, 2, '1', '2', '3', '4', 1, 2, 3, 1]));
console.log([...new Set('aqwewqwewqwewqweqwqwewaswer2w  q')].join(''));
console.log(set([1, 2, 1, 3, 21, NaN, NaN, NaN, NaN]));

//set中的 3 和 '3'是不一样的值 不会发生类型转换