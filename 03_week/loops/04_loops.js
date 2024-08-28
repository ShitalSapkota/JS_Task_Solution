// Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even. Do not use array.


function askNum() {
    allNum = '';
    for (let num = 1; num <= 20; num++){
        let enterNum = prompt('enter number');
        allNum += `${enterNum} `;
        if(enterNum % 2 == 0){
            console.log('even number: ',enterNum);
        }
    }
    console.log(allNum);
    
}
askNum();