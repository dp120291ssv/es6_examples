// object

let name = 'Jack'
let sex = 'male'
let age = '30'

// es 5 example
// var person = {
//     name: name,
//     sex: sex,
//     age: age
// }

// es 6 example
let person = {
    name,
    sex,
    age,
    greet() {
        console.log(`Hello ${name}`)
    },
    // getter example, u can simplify to use: password(){return name + age;}
    get password() {
        return name + age;
    }
}

console.log(person)
person.greet();

// Object.defineProperty(person, 'password', {
//     get: function () {
//         return this.name + this.age;
//     }
// })