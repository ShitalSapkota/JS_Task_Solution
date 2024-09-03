/* Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number. */

function askNum(){
    let enterNum, allNum = [], allSum = 0, count= 10;    
    for(i=0; i < count; i++) {
        enterNum = +prompt('enter a number: ');
        allSum += enterNum;
        allNum.push(enterNum);
    }
    console.log(allNum);
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
    aveg = allSum / count;
    console.log('Sum is: ', allSum);
    console.log('Average is: ', aveg);
}

askNum();

// enterNum is for storing input values
// allNum is for storing all entered values
// allSum is for adding all entered values



function askValue(){
    let sum = 0;
    let count = 10;
    let smallest = 0;
    let biggest = 0;

    for (let i = 0; i < count; i++) {
        let input = +prompt('Number?');
        sum+= input;
        if(input < smallest){
            smallest = input;
        }
        if(input > biggest) {
            biggest = input;
        }   
    }
    const aveg = sum / count;
    console.log('sum', sum);
    console.log('smallest', smallest);
    console.log('biggest', biggest);
}
askValue();



