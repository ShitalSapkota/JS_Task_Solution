// Initial array of team members
let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];

// Exercise 1: Loop through `teamMembers` and log each name to the console.
// Write your code here:

teamMembers.forEach((member)=>{
    console.log(member);
});


// Exercise 2: Remove the first member of the array.
// Write your code here:

   
//console.log(teamMembers.splice(0,1));


// Note:  unshift is to add and shift is to remove
// Exercise 3: Remove the last member of the array.
// Write your code here:


//console.log(teamMembers.splice(3,4));



// Exercise 4: Add a new member "Alex" to the front of the array.
// Write your code here:


//console.log(teamMembers.splice(0,0,'Alex'));


// Exercise 5: Append a new member "Linda" to the end of the array.
// Write your code here:


//console.log(teamMembers.push('Linda'));

/* .push() adds elements to the end.
.unshift() adds elements to the beginning. */


// Exercise 6: Create a new array that excludes the first two members.
// Write your code here:

const new_array = teamMembers.slice(2);
console.log(new_array);

// Exercise 7: Find the index of "Mike" in the array.
// Write your code here:

//console.log(teamMembers.indexOf('Mike'));

// Exercise 8: Try to find the index of "Jake" (who is not in the array).
// Write your code here:

// Exercise 9: Use `splice` to remove "Mike" and add "Carol" and "Bruce" in his place.
// Write your code here:

// Exercise 10: Concatenate a new member "Bob" to the end of the array and create a new array.
// Write your code here:

// Exercise 11: Using `slice` to Copy the Entire Array
// Write your code here:

// Exercise 12: Combining Arrays with `concat`
// Assume `newMembers` array is defined
let newMembers = ['Tina', 'Dean'];
// Write your code here:

// Exercise 13: Finding all occurrences of a John
// Write your code here:

// Exercise 14: Transforming members with `map` to be all written uppercase
// Write your code here: