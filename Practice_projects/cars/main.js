/* form all input values for Car's objects */
'use strict';

const form = document.querySelector('#car');
const cars = [];
/* Creating a class for Car objects */

class Car{
    constructor(plateNo, carMaker, carModel, carOwner, carPrice, carColor, year) {
        this.plateNo  = plateNo;
        this.carMaker = carMaker;
        this.carModel = carModel;
        this.carOwner = carOwner;
        this.carPrice = carPrice;
        this.carColor = carColor;
        this.year = year;
    }
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const carData = new FormData(event.target);
     // form validation...
    const carObject = Object.fromEntries(carData.entries());
    // console.log(carObject);
    try {
        if((carObject.year >= 1886 && carObject.year <=2024) && (carObject.plate != '' && carObject.price >= 0)) {
            const car = new Car(carObject.plate, carObject.maker, carObject.model, carObject.owner, carObject.price, carObject.color, carObject.year);

            cars.push(car);      
              //  array
            //console.log(cars);
            displayTable();
            
        } else {
            throw new ReferenceError('Licence Plate must not be empty and enter Year between 1886 and the current year. Price must be a positive number');
        }
    } catch (error) {
        displayError(error);
    }

});


const displayTable = ()=> {
    //console.log(cars);
    const table = document.querySelector('.car-table');
    table.innerHTML = table.rows[0].innerHTML;
    
    cars.forEach((car,index) => {
        const row = table.insertRow(-1);
        const indexing = row.insertCell(0);
        indexing.textContent = index + 1 ;
        Object.values(car).forEach(text => {
            const cell = row.insertCell(-1);
            cell.textContent = text;
        });
    });
};


const displayError = (error)=>{
    const showData = document.querySelector('.showData');
    const newtext = document.createElement('p'); 
    showData.appendChild(newtext);
    newtext.textContent = `${error.message}`;
};

const searchCar = document.querySelector('#searchCar');

searchCar.addEventListener('submit', (e)=>{
    e.preventDefault();
    //console.log(cars);
    //using our cars array to find car
    const findCar = document.querySelector('#search').value;
    cars.forEach((car) => {
        try {
            if(findCar == car.plateNo) {
                //console.log('donee');
                const showData = document.querySelector('.showData');
                const newDiv = document.createElement('div');
                newDiv.setAttribute('class', 'display-msg');
                const newtext = document.createElement('p');
                newDiv.appendChild(newtext);
                showData.appendChild(newDiv);
                newtext.textContent = `The Licence plate with ${findCar} has ${car.carColor} color.`;
            }else {
                throw new ReferenceError(`Sorry, License plate with ${findCar} is not found.`);
            }
        } catch (error) {
            displayError(error);
        }

   });
    
});

  /* we can add license plate and other objects individually with selecting id.*/
