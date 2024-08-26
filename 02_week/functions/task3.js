// Create a function named isEven that takes a number as a parameter and returns true if the number is even, and false if the number is odd.


/* function isEven(given_value){
    output_value = given_value % 2 === 0;   //  function
    return output_value;
} */

const isEven = (given_value) => given_value % 2 === 0;  // anonymous function

console.log(isEven(4)); // Returns true
console.log(isEven(7)); // Returns false