// Develop a program that outputs all even, positive numbers less than 100 in the following pattern: 2, 98, 4, 96, 6, 94, and so on, up to the last number before 100. Display the result in a single line.

let lastNum = 100, answer = '';
for(let num = 2; num < lastNum; num+=2){
      answer += `${num} ${lastNum-num} `;
}
console.log(answer);


// or

/* const allEven = [];
for(let num = 2; num <= lastNum; num+=2){
    allEven.push(num);
    allEven.push(lastNum - num);
}
console.log(allEven); */