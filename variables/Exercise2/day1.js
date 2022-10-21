let turtle1 = 'Leonardo';
let turtle2 = 'Raphael';
let turtle3 = 'Donatello';
let turtle4 = 'Michelangelo';

let allTurtles = '';

allTurtles += turtle1

console.log(allTurtles)

allTurtles += ' ' + turtle2 + ' ' + turtle3 + ' ' + turtle4

console.log(allTurtles)

console.log(allTurtles.lastIndexOf('Donatello'))

console.log(allTurtles.length)

let firtsHalfTurtles = allTurtles.slice(0, 17 - 1)
let secondHalfTurtles = allTurtles.slice(17, 39)
console.log("My favorites turtles are:", firtsHalfTurtles)
console.log("My least turtles are:", secondHalfTurtles)

