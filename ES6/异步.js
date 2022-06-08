setTimeout(() => {
    console.log(11111);
    Promise.resolve().then(() => {
        console.log(5555);
    })
})

new Promise((resolve, reject) => {
    console.log(22222);
    resolve();

}).then(() => {
    console.log(333);
})

console.log(4444);

//微任务 宏任务 异步
//微任务先执行 然后执行宏任务 setTimeout是宏任务