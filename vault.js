console.log("Find the calculation of 10")
console.log("Find the calculation of 40")
console.log("Find the calculation of 39")
// Write out the steps and check them out in the terminal

console.log("You have received this message because you have been chosen to open an important vault. Here is the secret combination:");

// Adding 3 + 7 will equal 10, and check it in the terminal
var num1 = 3 + 7;
console.log(num1)

// Multiplying 4 and 7 will equal 40, and check it in the terminal
var num2 = 4 * 10;
console.log(num2)

// Subtracting 11 from 50 will equal 39, and check it in the terminal
var num3 = 50 - 11;
console.log(num3)

// I have to provide the message to the user that they've been chosen to open the vault
let msg = 
"You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
console.log(msg)

// I'm including the combination along with the message this time

let code = `${msg} ${num1} - ${num2} - ${num3}`;
console.log(code);
alert(code);
