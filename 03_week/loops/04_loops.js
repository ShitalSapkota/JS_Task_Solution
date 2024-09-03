// Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even. Do not use array.


function askNum() {
    let allNum = '';
    let evenCount = 0;
    for (let num = 1; num <= 20; num++){
        let enterNum = prompt('enter number');
        allNum += `${enterNum} `;
        if(enterNum % 2 === 0){
            console.log('even number: ',enterNum);
            evenCount+= 1;
        }
    }
    console.log('entered numbers are: ', allNum);
    console.log('how many even numbers entered: ', evenCount);
    
}
askNum();