/* form all input values for Car's objects */
'use strict';

const form = document.querySelector('#car');
const searchCar = document.querySelector('#searchCar');
const checkData = localStorage.getItem('cars');
let cars = [];
/* Creating a class for Car objects */

class Car{
    constructor(plateNo, carMaker, carModel, carOwner, carColor, year, carPrice, discount_price) {
        this.plateNo  = plateNo;
        this.carMaker = carMaker;
        this.carModel = carModel;
        this.carOwner = carOwner;
        this.carColor = carColor;
        this.year = parseInt(year);
        this.carPrice = `€ ${parseFloat(carPrice)}`;
        this.discount_price = `€ ${discount_price}`;
    }
}



const displayError = (error)=>{   
    const showData = document.querySelector('.displayMsg');
    showData.textContent = `${error.message}`;
};


/* copied displayTable function from Margit's code and added indexing row for the table. */
const displayTable = ()=> {
    //console.log(cars);
    const carData = JSON.parse(localStorage.getItem('cars'));
    //console.log(carData);
    const deleteRow = document.createElement('button');
    deleteRow.classList.add("delete"); 
    deleteRow.textContent = "Delete";
    // delete button added
    const table = document.querySelector('.car-table');
    table.innerHTML = table.rows[0].innerHTML;
    carData.forEach((car,index) => {
        const row = table.insertRow(-1);
        const indexing = row.insertCell(0);        //
        indexing.textContent = index + 1 ;
        Object.values(car).forEach(text => {
            const cell = row.insertCell(-1);
            cell.textContent = text;

        });
/*         row.insertCell(-1).appendChild(deleteRow)
        deleteRow.addEventListener("click", () => deleteData(key)); */

    });

};


if(checkData !== null) {
   // console.log(checkData);
    const localStorageCar = JSON.parse(checkData);
    console.log(localStorageCar);
    cars = localStorageCar;
    console.log(cars);
    displayTable();
}


const deleteData = (key)=>{
    console.log(key);
    localStorage.removeItem(index);
    displayTable();
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    const carData = new FormData(event.target);
    const carObject = Object.fromEntries(carData.entries());
    const currentYear = new Date().getFullYear();                               // copied
    //console.log(carObject);
    // form validation...
    let discount_price = 0;
    //console.log(car);  
    try {
       // console.log(carObject);  
        if(!carObject.plate || !carObject.maker || !carObject.model|| !carObject.owner|| isNaN(carObject.price) || !carObject.color || isNaN(carObject.year)){
            throw new Error("All fields are required and must be valid.");
        }

        if(carObject.year < 1886 || carObject.year > currentYear) {
            throw new Error('Enter Year between 1886 and the current year');     
        }
        
        if(carObject.price <= 0){
            throw new Error("All fields are required and must be valid.");
        }

        if(currentYear - carObject.year >=10){
            discount_price = carObject.price - (carObject.price * 0.15)
        }else {
            discount_price = "No Discount";
        }
       
        const car = new Car(carObject.plate, carObject.maker, carObject.model, carObject.owner, carObject.color, carObject.year, carObject.price, discount_price);
         
        form.reset()

        cars.push(car);          //  array  
        //console.log(cars);
        // added local storage step 3:
        localStorage.setItem('cars', JSON.stringify(cars));
        displayTable()

        } catch (error) {
        displayError(error);
        }

});

searchCar.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    try{ 
        const carData = JSON.parse(localStorage.getItem('cars'));    //  from local Storage data
        const findCar = document.querySelector('#search').value;
        if(findCar){
            const resultCar = carData.find((car)=>car.plateNo === findCar);  
            if(resultCar){  
                const showData = document.querySelector('.displayMsg');
                showData.innerHTML = `<p>License: ${resultCar.plateNo}</p>
                                    <p> Maker: ${resultCar.carMaker}</p>
                                    <p>Model: ${resultCar.carModel}</p>
                                    <p>Owner: ${resultCar.carOwner}</p>
                                    <p>Color: ${resultCar.carColor}</p>
                                    <p>Price: ${resultCar.carPrice}</p>
                                    <p>Discount: ${resultCar.discount_price}</p>`;
            }   
            else {
                throw new Error(`The License plate with ${findCar} has not found.`);  
            }
        }else {
            throw new Error('Search is empty!'); 
        }
        
    } catch(error) {
        displayError(error);
    } 
    
});


/* we can add license plate and other objects individually with selecting id.*/
