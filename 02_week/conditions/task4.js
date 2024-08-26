/**
Develop a function called greaterNum which:

 - Accepts two arguments, both of which are numbers.
 - Returns the larger of the two numbers.

 */

 function greaterNum(a, b) {
    if( a > b){
        return (`${a} is greater number than ${b}`);
    } else{
        return (`${b} is greater number than ${a}`);
    }
 }

 // Sample usage - do not modify
 console.log(greaterNum(5, 10));
 console.log(greaterNum(2, 1));
 console.log(greaterNum(4, 25));
 