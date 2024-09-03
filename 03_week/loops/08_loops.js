// Develop a program that initially asks the user how many numbers they wish to input. After receiving this information, the program should then prompt the user to enter each of these numbers. Once all numbers have been entered, the program should determine and display the smallest and biggest number provided by the user.

function askNum(){
    let enterNum, num, askUser, allNum = [];
    askUser = confirm('Do you wish to continue?');
    if(askUser == true) {
        num = +prompt('How many numbers do you want to input?');
        for(i = 1; i <= num; i++){
            enterNum = +prompt('Enter a number: ');
            allNum.push(enterNum);
        }
        let minNum = allNum[0];
        let maxNum = allNum[0];
        for (j of allNum){
            if(j < minNum){
                minNum = j;
            }else {
                maxNum = j;
            } 
        }   
        console.log('max', maxNum);
        console.log('min', minNum);
        console.log(allNum);

    }
   
}
askNum();
