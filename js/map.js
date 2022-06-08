// 答案：[1, NaN, NaN]
// 解析：parseInt(val, radix) ：两个参数，val值，radix基数（就是多少进制转换）
//      map 能传进回调函数 3参数(element, index, array)
parseInt('1', 0);  //0代表10进制
console.log(parseInt('1', 0));
parseInt('2', 1);  //没有1进制，不合法
parseInt('3', 2);  //2进制根本不会有3
//巩固：["1", "1", "11", "5"].map(parseInt) //[1, NaN, 3, NaN]
parseInt('13', 2)    // 1 ,
//计算机在二进制只认识0，1，parseInt转换时就当作不认识的字符忽略了
parseInt('18str')     //18   10进制能认识到9
parseInt(1 / 0, 19)    // 18
//1 / 0 == Infinity 19 //进制计算机能认识最后一个字符是i
//详细解析在下面的链接


// 答案：an error
// 解析：Math.pow(x, y)  x 的 y 次幂的值
// reduce（fn, total）
// fn(total, currentValue, currentIndex, arr)
// 如果一个函数不传初始值，数组第一个组默认为初始值.
// [3, 2, 1].reduce(Math.pow)
// Math.pow(3, 2) //9
// Math.pow(9, 1) //9
// //巩固：[].reduce(Math.pow)       //空数组会报TypeError
// [1].reduce(Math.pow)      //只有初始值就不会执行回调函数，直接返回1
// [].reduce(Math.pow, 1)     //只有初始值就不会执行回调函数，直接返回1
// [2].reduce(Math.pow, 3)    //传入初始值，执行回调函数，返回9

// [[3, 2, 1].reduce(Math.pow), [].reduce(Math.pow)]
console.log([3, 2, 1].reduce(Math.pow));
// , [].reduce(Math.pow)]