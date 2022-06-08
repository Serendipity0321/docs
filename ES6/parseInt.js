
//parseInt(string, radix);
/*
string
要被解析的值。如果参数不是一个字符串，则将其转换为字符串 (使用 ToString抽象操作)。字符串开头的空白符将会被忽略。
radix 可选
从 2 到 36，表示字符串的基数。例如指定 16 表示被解析值是十六进制数。请注意，10 不是默认值！文章后面的描述解释了当参数 radix 不传时该函数的具体行为。
返回值
从给定的字符串中解析出的一个整数。

或者 NaN，当

radix 小于 2 或大于 36，或
第一个非空格字符不能转换为数字。
parseInt('123', 5) // 将'123'看作 5 进制数，返回十进制数 38 => 1*5^2 + 2*5^1 + 3*5^0 = 38
描述
parseInt函数将其第一个参数转换为一个字符串，对该字符串进行解析，然后返回一个整数或 NaN。

如果不是 NaN，返回值将是以第一个参数作为指定基数 radix 的转换后的十进制整数。(例如，radix 为 10，就是可以转换十进制数，为 8 可以转换八进制数 "07"，16可以转换十六进制数"0xff"，以此类推)。

对于 radix 为 10 以上的，英文字母表示大于 9 的数字。例如，对于十六进制数（基数 16），则使用 A 到 F。

如果 parseInt 遇到的字符不是指定 radix 参数中的数字，它将忽略该字符以及所有后续字符，并返回到该点为止已解析的整数值。parseInt 将数字截断为整数值。允许前导和尾随空格。

由于某些数字在其字符串表示形式中使用 e 字符（例如 6.022×23 表示 6.022e23 ），因此当对非常大或非常小的数字使用数字时，使用 parseInt 截断数字将产生意外结果。parseInt不应替代 Math.floor()。

parseInt 可以理解两个符号。+ 表示正数，- 表示负数（从 ECMAScript 1 开始）。它是在去掉空格后作为解析的初始步骤进行的。如果没有找到符号，算法将进入下一步；否则，它将删除符号，并对字符串的其余部分进行数字解析。

如果 radix 是 undefined、0 或未指定的，JavaScript 会假定以下情况：

如果输入的 string 以 0x 或 0X（一个 0，后面是小写或大写的 X）开头，那么 radix 被假定为 16，字符串的其余部分被当做十六进制数去解析。
如果输入的 string 以 "0"（0）开头，radix 被假定为 8（八进制）或 10（十进制）。具体选择哪一个 radix 取决于实现。ECMAScript 5 澄清了应该使用 10 (十进制)，但不是所有的浏览器都支持。因此，在使用 parseInt 时，一定要指定一个 radix。
如果输入的 string 以任何其他值开头，radix 是 10 (十进制)。
如果第一个字符不能转换为数字，parseInt 会返回 NaN。

为了算术的目的，NaN 值不能作为任何 radix 的数字。你可以调用 isNaN 函数来确定 parseInt 的结果是否为 NaN。如果将 NaN 传递给算术运算，则运算结果也将是 NaN。

要将一个数字转换为特定的 radix 中的字符串字段，请使用 thatNumber.toString(radix) 函数。
*/
let q1 = parseInt(123, 4);
let q2 = parseInt('eedwefe', 4);
let q3 = parseInt(123, 2);
let q4 = parseInt(123, 16);
let q5 = parseInt(123);
console.log(q1);
console.log(q2);
console.log(q3);
console.log(q4);
console.log(q5);
console.log(parseInt(0123));
console.log(parseInt(0x123));