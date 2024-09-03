// Develop a program that initially asks the user for a single number. Following this, the program should inquire if the user wishes to continue providing numbers with the prompt: 'Do you want to continue giving numbers? (y/n)'. If the user responds with 'y', the program will request another number. If the response is 'n', the program terminates. Upon termination, it calculates and displays the average of all entered numbers.

function askNum(){
    let enterNum, askUser = true, allNum = 0, aveg, count= 0; 
    while(askUser == true){
        enterNum = +prompt('Enter a number: ');
        allNum += enterNum; 
        count++;
        askUser = confirm('Do you want to continue giving numbers?');
    }
    aveg = allNum / count;
    console.log('Average number is: ', aveg);
    // console.log(allNum);
}

askNum();

// instead of using confirm..
// let shouldContinue = prompt('Do you want to continue giving numbers? (y/n): ')
// if(shouldContinue === 'n'){
//    break;
// }

