// Write a function named findMax that takes three numbers as parameters and returns the largest of the three.

/* function findMax(a,b,c){
    return (Math.max(a,b,c));
} */


const findMax = (a,b,c) => Math.max(a, b, c);

console.log(findMax(3, 7, 2)); // Returns 7
console.log(findMax(10, 5, 15)); // Returns 15