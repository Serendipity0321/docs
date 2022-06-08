const arr = [1, 2, 3]
console.log(arr.shift()) // 1
console.log(arr) // [2, 3]

// 数组模拟常见数据结构之一：队列
const queue = [0, 1]
// 入队
queue.push(222) //
console.log(queue) // [0, 1, 222]

console.log(queue.shift()) // 0
console.log(queue) // [1, 222]

// indexOf()
// 在数组中寻找该值，找到则返回其下标，找不到则返回 - 1。
const arr3 = [1, 2, 3]
console.log(arr.indexOf(2)) // 1
console.log(arr.indexOf(0)) // -1

// includes()
// 在数组中寻找该值，找到则返回true，找不到则返回false。
const arr4 = [1, 2, 3]
console.log(arr.includes(2)) // 1;
console.log(arr.includes(4)) // 1;

// join()
// 将数组转化成字符串，并返回该字符串，不传值则默认逗号隔开，原数组不变。
const arr5 = [11, 2, 3]
console.log(arr5.join());
console.log(arr5);

// reverse()
// 翻转原数组，并返回已完成翻转的数组，原数组改变。
const arr6 = [11, 2, , 3, 21, 76, 89, 6453, 11, 32, 3]
console.log(arr5.reverse());
console.log('qqqqqqqqqqqqqqqqqq');

//slice(start，end)
//从start 开始截取到end，但是不包括end
console.log(arr6.slice(4, 7));//[21,76,89]

const arr7 = [1, 32, 34, 2, 32, 12, 23, 123, 1232, 23312, 12]
//splice(start, deleteCount, item1, item2……)
const arr8 = arr7.splice(4, 2, '5wqa', 'sdfdfgw');
console.log(arr8);
console.log(arr7);
//includes、startsWith、endsWith，es6的新增方法，
//includes 用来检测目标字符串对象是否包含某个字符，返回一个布尔值，startsWith用来检测当前字符是否是目标字符串的起始部分，相对的endwith是用来检测是否是目标字符串的结尾部分。

const str = 'Excuse me, how do I get to park road?'
console.log(str.includes('how')) // 输出：true
console.log(str.startsWith('sdasda')) // 输出： false
console.log(str.endsWith('?')) // 输出： true


//返回一个新的字符串对象，新字符串等于重复了指定次数的原始字符串。
//接收一个参数，就是指定重复的次数。原字符串不变。
//repeat()
const str1 = 'http'
const str2 = str1.repeat(3)
console.log(str1) // 输出：'http'
console.log(str2) // 输出：'httphttphttp'


//forEach
const arr9 = [5, 1, 3, 7, 4]
arr.forEach((item, index) => {
    if (item < 2) return
    console.log(`索引：${index}，数值：${item}`)
    arr9[1] = 0
})
console.log(arr9)
// 打印结果：
// 索引：0，数值：5
// 索引：2，数值：3
// 索引：3，数值：7
// 索引：4，数值：4
// [5, 1, 3, 7, 4, 0]

const foo = {
    name: 'bar',
    sex: 'male'
}
Object.defineProperty(foo, "age", { value: 18 })
for (const key in foo) {
    console.log(`可枚举属性：${key}`)
}
console.log(`age属性：${foo.age}`)
// 打印结果：
// 可枚举属性：name
// 可枚举属性：sex
// age属性：18




