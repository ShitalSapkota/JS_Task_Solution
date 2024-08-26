/**
Write a function named gradeChecker that takes a number (representing a student's grade) as a parameter and returns a grade classification as follows:

"A" for grades 90 and above
"B" for grades 80-89
"C" for grades 70-79
"D" for grades 60-69
"F" for grades below 60
*/

const gradeChecker = (number) => {
    if(number >= 90){
        return 'A';
    } else if(number <= 89 && number >= 80){
        return 'B';
    } else if(number <= 79 && number >= 70){
        return 'C';   
    } else if(number <= 69 && number >= 60){
        return 'D';   
    } else if(number < 60){
        return 'F'
    } else {
        return 'Invalid Input'
    }

}


// Sample usage - do not modify
console.log(gradeChecker(95)); // Outputs: "A"
console.log(gradeChecker(85)); // Outputs: "B"
console.log(gradeChecker(75)); // Outputs: "C"
console.log(gradeChecker(65)); // Outputs: "D"
console.log(gradeChecker(55)); // Outputs: "F"
