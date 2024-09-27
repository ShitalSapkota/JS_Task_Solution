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
    const carObject = Object.fromEntries(carData.entries());
    const car = new Car(carObject.plate, carObject.maker, carObject.model, carObject.owner, carObject.price, carObject.color, carObject.year);

    cars.push(car);    //  array
    //console.log(cars);
    displayTable();
    
   // car.printData();      // ----> to check value

});

const displayTable = () => {
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
}


// const searchCar = document.querySelector('#searchCar');
// searchCar.addEventListener('submit', (e)=>{
//     const table = document.querySelector('.car-table');
//     const tableData = new DataTable(e.target);
//     const searchTable = function (){
//         if(e.target.value === table.rows.value) {

//         }
//     }
    

// });






  /* we can add license plate and other objects individually with selecting id.*/
/*  const plateNo = document.querySelector('#plate').value;
    const carMaker = document.querySelector('#maker').value;
    const carModel = document.querySelector('#model').value;
    const carOwner = document.querySelector('#owner').value;
    const carPrice = document.querySelector('#price').value;
    const carColor = document.querySelector('#color').value; */
    //const newCar = new Car(plateNo, carMaker, carModel, carOwner, carPrice, carColor);


    // inside class
      // printData(){
    //     return `${this.plateNo} ${this.carMaker} ${this.carModel} ${this.carOwner} ${this.carPrice} ${this.carColor}` 
    //    // console.log(this.plateNo, this.carModel, this.carPrice);
    // }