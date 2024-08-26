/**
 Implement the function canVote such that it returns true if the age is 18 or above, and false if the age is below 18.
*/


/* const canVote = (age) => {
    if (age>= 18){
        return true;
    }
    return false;
} */


// OR,

function canVote(age){
    return age >= 18;
}

// Sample usage - do not modify
console.log(canVote(20));  // Outputs: true
console.log(canVote(16));  // Outputs: false
