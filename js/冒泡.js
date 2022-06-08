/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param arr int整型一维数组 
 * @return int整型一维数组
 */

//[1,5,3,4,6]
//[1,3,4,5,6]

function sort(arr) {
    // write code here
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
module.exports = {
    sort: sort
};

// console.log(sort());