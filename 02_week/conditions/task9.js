/* Write a function named secretWordGame that takes a word as a parameter and returns a special message based on the following conditions:

If the word is "JavaScript", return "You found the secret word!".
If the word starts with the letter "J", return "You're close, but not quite!".
If the word ends with the letter "t", return "Almost there!".
If the word contains the letter "e" anywhere, return "Good guess, but not the secret word!".
For any other word, return "Keep trying!".
*/

function secretWordGame(word) {
    if(word == "JavaScript") {
        return "You found the secret word!"
    } else if(word.startsWith("J")) {
        return "You're close, but not quite!"
    } else if(word.endsWith("t")) {
        return "Almost there!"
    } else if(word.includes("e") || word.endsWith("t")) {
        return "Good guess, but not the secret word!" 
    } else {
        return "Keep trying!"
    }
} 


// Sample usage - do not modify
console.log(secretWordGame("JavaScript"));  // Outputs: "You found the secret word!"
console.log(secretWordGame("Java"));        // Outputs: "You're close, but not quite!"
console.log(secretWordGame("Cat"));         // Outputs: "Almost there!"
console.log(secretWordGame("elephant"));    // Outputs: "Good guess, but not the secret word!"
console.log(secretWordGame("egg"));         // Outputs: "Keep trying!"

