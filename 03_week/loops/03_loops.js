// Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.

function averageSpeed() {
    let dis, time;
    while(dis != 0){
        dis = +prompt('Enter value for kilometers (use number)');
        if(dis == 0){
            console.log('end game');
            break;
        } else {
            time = +prompt('Enter value for time (use numbers)');
            speed = (dis / time);
            // alert('hey: ' + speed)
            console.log(speed);
        }   
    }
}

averageSpeed();

// using + in prompt for converting to numbers. by default prompt input value in strings. 

/*   for(let i = 0; i < 5; i++) {
        dis = prompt('Enter value for kilometers');
        time = prompt('Enter value for time');
        if(dis == '0'){
            break;
        }else {
            speed = (dis / time);
        }
        console.log('Average speed is: ',speed);
    } */
// in for loop; i is for iteration but the question asked for continous loop so using while will give best result for this question.//