// This is 3rd week testing task.

let currentBalance = 10000;

function checkBalance(){
    console.log('Current Balance is: ', currentBalance);
}

function deposit(){
    let depositMoney = +prompt('Please enter numbers:');
    if(depositMoney != 0 && depositMoney > 0){
        currentBalance = currentBalance + depositMoney;
    }
    console.log(currentBalance);
}

function withdraw(){
    let withdrawMoney = +prompt('Please enter numbers:');
    if(withdrawMoney >= 0 && withdrawMoney <= currentBalance){
        currentBalance = currentBalance - withdrawMoney;      
    }else {
        console.log('Your balance is not enough');
    }
    console.log(currentBalance);
}

function main(){
    //check balance, deposit, withdraw, or exit) until user choose to exit.
    let userInput = prompt('Do you want to exit (type e -> exit or c -> continue) ?')
    while(userInput == 'c'){
        let askUser = prompt('Type d -> deposit or c -> CheckBalance or w -> withdraw or e -> exit :');
        if(askUser == 'd'){
            deposit();
        }else if(askUser == 'c') {
            checkBalance();
        }else if(askUser == 'w'){
            withdraw();
        }else if(askUser == 'e'){
            console.log('EXIT');
            break;
        }else{
            console.log('Invalid Input');
        }
    }
    if(userInput == 'e'){
        console.log('EXIT');
    }
}
main();
    