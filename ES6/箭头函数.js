var id = 'Global';
// 箭头函数定义在全局作用域
let fun1 = () => {
    console.log(this.id)
};

fun1();     // 'Global'
// this的指向不会改变，永远指向Window对象
fun1.call({ id: 'Obj' });     // 'Global'
fun1.apply({ id: 'Obj' });    // 'Global'
fun1.bind({ id: 'Obj' })();   // 'Global'



const obj = {
    name: '张三',
    getName() {
        return this.name
    },
    getName1: () => {
        return this.name
    }
}
obj.__proto__.getName2 = function () {
    return this.name
}
obj.__proto__.getName3 = () => {
    return this.name
}
console.log('普通函数', obj.getName())//普通函数 张三
console.log('普通函数', obj.getName2())//普通函数 张三
console.log('箭头函数', obj.getName1())//箭头函数 undefined
console.log('箭头函数', obj.getName3())//箭头函数 undefined