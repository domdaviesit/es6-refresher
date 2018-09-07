// const nums = [1,2,3,4];
// nums.push(5);
// console.log(nums);

// Arrow Functions
/// /////////////////////////////////////////////

// old way
// function sayHello (name) {
//   console.log('Hello ' + name)
// }

// sayHello('Dom')

// can use const let or var
// if only 1 line don't need {} - looks cleaner
// if only 1 parameter you don't need ()
// const sayHello = name => {
//   console.log('Hello ' + name)
// }

// sayHello('Brad')

// Template literals - help with concatenating use `for the string and ${parameter} each time concatenating - use jsx in react so won't use too much

// Array Methods
/// //////////////////////////////////////////

// FOREACH

// const fruits = ['Apples', 'Oranges', 'Grapes']

// loop through it

// fruits.forEach((fruit, index) => console.log(fruit))

// Map //// like FOREACH but returns an array.  loop through lists

// lets take s off each fruit

// const fruits = ['Apples', 'Oranges', 'Grapes']

// const singleFruit = fruits.map(fruit => fruit.slice(0, -1))

// console.log(singleFruit)

// Filter - used in state - redux (context api)
// filter out based on a condition
// state is immutable (can't change it) so make a copy without something eg jaqui below.
/// ///////////////////////////////////////////

// const people = [
//   { id: 1, name: 'Larry' },
//   { id: 2, name: 'Jaqui' },
//   { id: 3, name: 'Suzy' }
// ]

// filter out jaqui

// const people2 = people.filter(person => person.id !== 2)
// console.log(people2)

// SPREAD  -  again as state is immutable u must make a copy of it ... spread lets you take the original data and add to it.  You can mix spread with filter

// Destructuring
// Classes
// Subclasses

// Moduels
// create components in different files and import them in, need abel
