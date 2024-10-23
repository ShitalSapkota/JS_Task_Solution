/* Pancake maker step 1:  */
const pancake = document.querySelector('#type');
const priceBanner = document.querySelector('.price-banner');
const priceDisplay = document.querySelector('.price-display');
const extra_toppings = document.querySelectorAll('input[type=checkbox]');

const button = document.querySelector('#submit');

/* Step 2 */
const radios = document.querySelectorAll('input[type=radio]');
const seeOrder = document.querySelector('#seeOrder');
const toppings = [];
const order = {name: '' , option: '', toppings, Pancake: ''};
let isDeliverSelected = false;

//console.log(pancake.value);
let totalPrice = parseInt(pancake.value);

order.Pancake = 'Classic - $5';

//console.log(order);
/* If Pancake is select */

pancake.addEventListener('change', function(){

  totalPrice = parseInt(pancake.value);
  priceBanner.textContent = `$${pancake.value}`;
  priceDisplay.querySelector('#totalPrice').textContent = `$${pancake.value}`;
  //console.log(pancake.textContent);
});


/* If toppings are selected */ 

extra_toppings.forEach((topping) => {
  topping.addEventListener('click', () => {  
      if(topping.checked) {
        totalPrice = totalPrice + parseInt(topping.value);
        priceBanner.textContent = `$${totalPrice}`;
        priceDisplay.querySelector('#totalPrice').textContent = `$${totalPrice}`;
        toppings.push(topping.id);
      }else{
        totalPrice = totalPrice - parseInt(topping.value);
        priceBanner.textContent = `$${totalPrice}`;
        priceDisplay.querySelector('#totalPrice').textContent = `$${totalPrice}`;
      }
      
  });
});


/* If Order (radio buttons) options selected */
button.addEventListener('click', function() {
  const userName = document.querySelector('#userName').value;
  const eat = document.querySelector('label[for= eat]').innerHTML;
  const pickup = document.querySelector('label[for= pickUp]').innerHTML;
  const deliver = document.querySelector('label[for= deliver]').innerHTML;
  order.name = userName;
  for (let radio of radios) {
    if(radio.checked && radio.id == 'eat'){
      order.option = eat;
    }
    if(radio.checked && radio.id == 'pickUp'){
      order.option = pickup;
    }
   
    if (radio.checked && radio.id === 'deliver') {
      if(!isDeliverSelected) {
        if(radio.value === '5') {
          totalPrice = totalPrice + parseInt(radio.value);
          priceBanner.textContent = `$${totalPrice}`;
          priceDisplay.querySelector('#totalPrice').textContent = `$${totalPrice}`;
          isDeliverSelected = true;
          order.option = deliver;
        }
      }
      
    }else if(radio.checked && radio.id != 'deliver' && isDeliverSelected) {  

      totalPrice = totalPrice - 5;
      priceBanner.textContent = `$${totalPrice}`;
      priceDisplay.querySelector('#totalPrice').textContent = `$${totalPrice}`;
      isDeliverSelected = false;
    }
  }

});

seeOrder.addEventListener('click', () => {
  console.log(order);

});





/*
   Bug 1:  unchecked checkbox while changing select type (pancake).
*/