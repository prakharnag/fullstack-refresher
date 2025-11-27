//var - function scoped
// let - could be unintentially updated by other code that can lead to bugs
// const - cannot be updated, safer to use, must be initialized
// const exerciseTimeMins = 90

// let message = ''

// if (exerciseTimeMins < 30) {
//     message = 'You need to try harder!'
// }
// else {
//     message = 'Doing good!'
// }

//Ternary operator
// const message = exerciseTimeMins < 30 ? 'You need to try harder!' 
// : exerciseTimeMins < 60 ? 'Doing good!' 
// : 'Excellent'

// //if-else is better when there are many conditions to check, it also give better readability
// console.log(message)


// console.log("---------------")
// console.log("For loop")

// debugger

// for (let i = 0; i <= 100; i++){
//     console.log("Even No's ")
//     if (i % 2 === 0){
//         console.log(i)
//     }
// }



//primitive types - string, number, boolean, null, undefined, symbol, bigint


//Template strings
const name = 'John';
const age = 30;
console.log(`My names is ${name} and my age is ${age}`);

//string operations
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.substring(0, 2).toUpperCase());
console.log(name.split(''));

//arrays - variables that hold multiple values
const hobbies = ['sports', 'cooking', 'reading'];

hobbies.push('coding');

hobbies.unshift('cricket');

hobbies.pop();

console.log(hobbies.indexOf('reading'));

console.log(Array.isArray(hobbies));
console.log(hobbies);


// Object Literals

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['sports', 'cooking'],
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    }
}

console.log(person);

// Destructuring - pulling variables from the object out
const { firstName, lastName, address: { city } } = person;

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    },

]

console.log(todos);

console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);

console.log(todoJSON);

//loops

for (let i = 0; i <= 10; i++){
    console.log("Even No's ")
    if (i % 2 === 0){
        console.log(i)
    }
}

let i = 0;
while (i<10){
    console.log(`While Loop Number: ${i}`);
    i++;
}

// for (let i = 0; i < todos.length; i++){
//     console.log(todos[i].text);
// }

for (let todo of todos){
    console.log(todo.text);
}

//forEach(loop through a array), 


todos.forEach(function(todo){
    console.log(todo.text);
});

//map (create a array from another array), 
const todoText = todos.map(function(todo){
return todo.text;
});

console.log(todoText);

//filter(allows to create new array based on a condition)
const todoTextFilter = todos.filter(function(todo){
return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});

console.log(todoTextFilter);


let str = 'abc'
console.log(str)

str = 1

console.log(str)

//OOPS
//Constructor function

function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    // this.getFullName = function() {
    //     return `${this.firstName} ${this.lastName} `;
    // }
    // this.getBirthYear = function() {
    //     return this.dob.getFullYear();
    // }
}

// using prototypes for methods for a object
//a prototype is a fundamental mechanism that enables objects to inherit properties and methods from other objects. It forms the basis of JavaScript's prototypal inheritance model. 

Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName} `;
}

//Class
class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
        getFullName(){
        return `${this.firstName} ${this.lastName} `;
    }
        getBirthYear(){
        return this.dob.getFullYear();
    }
}

//Instantiate the object

const person1 = new Person('Prakhar', 'Nag', '01-22-1998');
const person2 = new Person('Rahul', 'Jain', '12-2-1989');

console.log(person1.getFullName());



