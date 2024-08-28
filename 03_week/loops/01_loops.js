for(let num = 2; num < 10; num+=2) {
    console.log('Even', num);
}



// Create a program that outputs all odd, positive numbers less than 100, starting from 1, such as 1, 3, 5, 7, 9, 11, and so on.

function oddNumber() {
    for(let num = 1; num <= 100; num=num+2){
        console.log('all positive odd number is: ', num);
    }
}

oddNumber();