// var arr1 = [1, [2, [4, [5, [6]]]]]
//函数递归实现
function flatten(arr1) {
    let result = []
    arr1.forEach(item => {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item))
        } else {
            result.push(item)
        }
    })
    return result
}
console.log(flatten([1, [2, [4, [5, [6]]]]])) // [1,2,3,4,5,6]

//reduce 
function flatten1(arr) {
    return arr.reduce((res, next) => {
        return res.concat(Array.isArray(next) ? flatten1(next) : next)
    }, [])
}
console.log(flatten1([1, [2, [4, [5, [6]]]]]))  // [1,2,3,4,5,6]

//扩展运算符
var arr2 = [
    {
        name: '张三'
    },
    [
        {
            name: '李四'
        },
        {
            name: '王五'
        }
    ]
]
function flatten2(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}
console.log(flatten2([1, [2, [4, [5, [6]]]]]))  // [1,2,3,4,5,6]
console.log(flatten(arr2))  // ['[object Object]', '[object Object]', '[object Object]']

//toString split 方法结合  元素类型会被转换成字符串类型如下面的代码所示。
function flatten3(arr) {
    return arr.toString().split(',')
}
console.log(flatten3([1, [2, [4, [5, [6]]]]]))	// ['1','2','3','4','5','6']


//ES6的flat函数实现语法：arr.flat([depth])
//其中depth是flat 的参数，depth是可以传递数组的展开深度（默认不填、数值是1)，即展开一层数组。
//那么如果多层的该怎么处理呢 ?
//参数也可以传进 Infinity，代表不论多少层都要展开。那么我们来看下flat方注怎么实和洁看下面的代配

function flatten4(arr) {
    return arr.flat(Infinity)
}
console.log(flatten4([1, [2, [4, [5, [6]]]]]))	// [1,2,3,4,5,6]

// function flat(arr, Infinity) {

//     // 以下代码还可以简化，不过为了可读性，还是....
//     return arr.reduce((pre, cur) => {
//         return pre.concat(Array.isArray(cur) ? flat(cur, depth - 1) : cur);
//     }, []);

//     return arr.slice();
// }
// console.log(flat([1, 2, 32, 12, [12321, 3223, 123, [12313, 34234, 233, [1231, 11, 323, 1212, 12]]], 12]));

//JSON和正则表达式共同实现

// function flatten5(arr) {
//     let str = JSON.stringify(arr)
//     str = str.replace(/(\[|\])/g, '')
//     str = '[' + str + ']'
//     return JSON.parse(str)
// }
// console.log(flatten5([112121212, [2, 232, [4, [5, [6]]]]]))
// ['wqeqwe2eqwe ']
// ['a','a'.['s']]

// const flatten = list => list.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])