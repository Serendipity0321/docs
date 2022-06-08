const qq = {
    name: 'qeeqwe',
    age: 12
}
const qq1 = JSON.parse(JSON.stringify(qq));
console.log(qq1);
// console.log(cloneDeep(qq));