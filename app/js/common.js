// Example 1 - default arguments
function greet(name = 'Sergei') {
    return `Hello ${name}`
}

console.log(greet())

// Example 2 - syntax () => {}
const greet2 = (name = 'Sergei') => `Hello ${name}`
console.log(greet2())

// Example 3 cases of syntax
// 3.1 function expression
const func = () => {
};

// 3.2 function declaration
(a, b) => {
    let sum = a + b;
    return sum;
};

// 3.3 one argument
a => {
    let sum = a + 2;
    return sum;
}

// 3.4 without return if one line
a => a * 2;

// 3.5 object literal
() => ({a: 2});

// 3.6 IIFE
(() => {})();

// Example 4 - context
// 4.1 - can't use NEW for arrow function
// 4.2 - doesn't contain arguments[]
// 4.3 - bind, apply
// let person = {
//     userName: 'Jack',
//     greet: function () {
//         var _this = this;
//         window.setTimeout(function (){
//             console.log(_this.userName, this)
//         }, 1000)
//     }
// }
// person.greet();

// arrow function

let person = {
    userName: 'Jack',
    greet: function () {
        window.setTimeout(() => {
            console.log(this.userName, this)
        }, 1000)
    }
}
person.greet();

