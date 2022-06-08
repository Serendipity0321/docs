/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 传入数组arr和目标数num，找到数组中最短相加等于目标数的组合并返回，如果没有返回空数组[]
 * @param arr int整型一维数组 数组
 * @param num int整型 目标数
 * @return int整型一维数组
 */
function findArray(arr, num) {
    // write code here
    // const arr = [];
    var set = new Set();

    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i <= arr.length; i++) {
            if (arr[i] + arr[j] === target) {
                set.add(j);
                set.add(i);

            }
        }
    }
    for (let x of set) {
        Number.push(x);
    }
    return num;
}
module.exports = {
    findArray: findArray
};