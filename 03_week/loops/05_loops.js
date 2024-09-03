// Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.

function askNum(){
    let enterNum, allNum = 0, count = 0;
    while(enterNum !==0){
        enterNum = +prompt('enter a number: ');
        allNum += enterNum;
        count++;
    }
    let aveg = allNum / count ;
    console.log('average number is: ', aveg );
    // console.log(allNum);
}

askNum();


// can also done in Do..while condition and it will run atleast once.