function fang(dou) {
    let time = null;
    return function () {

        clearTimeout(time);
        time = setTimeout(() => {
            console.log('111');
        }, 1000)
    }
}
function dou() {
    console.log('防抖');
}