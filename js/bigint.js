
let str = str(prompt(""));
let arr = str.split("")
let len = arr.length
if (arr.length % 2) {
    arr.unshift("0");
    len = len + 1
}

function divide(arr) {
    let strsum = ""
    if()
    for (let i = 0; i < len / 2; i++) {
        let a = arr.shift();
        let b = arr.shift();
        if (strsum == "") {
            strsum = a + b;
        } else {
            strsum = addStringNumber(strsum, (a + b));
        }
    }
    divide(strsum.split(""))
}

function addStringNumber(str1, str2) {
    // 将字符串转换为数组    
    const arr1 = str1.split(""), arr2 = str2.split("");
    let result = "";
    let len1 = arr1.length - 1, len2 = arr2.length - 1;
    let flag = 0;
    while (len1 >= 0 || len2 >= 0) {
        let temp = Number(arr1[len1]) + Number(arr2[len2]) + flag;
        if (len1 < 0) {
            temp = Number(arr2[len2]) + flag;
            len1 = 0;
        }
        if (len2 < 0) {
            temp = Number(arr1[len1]) + flag;
            len2 = 0;
        }
        // 相加结果是否有进位
        flag = temp >= 10 ? 1 : 0;
        // 相加结果大于0，当前结果就只保留个位数
        result = (temp % 10) + result;
        len1--;
        len2--;
    }
    return flag > 0 ? `${flag}${result}` : `${result}`;
}
