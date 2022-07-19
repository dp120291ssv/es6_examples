/**
 * 1. Spread
 */
// Example 1 - Array

// const arr1 = [1, 2, 3, 4];
// const arr2 = [5, 6, 7, 8];
// es5 example
// Array.prototype.push.apply(arr1, arr2)
// console.log(arr1)
// console.log([...arr1, ...arr2])

// Example 2 - object

// const A = {
//     a: 'firstname_A',
//     b: 'lastname_A'
// }
//
// const B = {
//     a: 'city_B'
// }
// var c = Object.assign(A, B);
// var c = Object.assign(B, A);
// let c = {...A, ...B}
// console.log(c)

// Example 3 - function

// const arr = [1, 2, 3]
// function sum(a, b, c) {
//     return a+b+c;
// }
// // es5 example
// sum([0], [1], [2])
// sum.apply(null, arr)
// // es6 example
// console.log(sum(...arr))

/**
 * 2. Rest
 */

// Example 1 - Array
function res(arg, ...REST) {
    console.log(arg, REST)
}
res(1,2,3,4,5,6,7)