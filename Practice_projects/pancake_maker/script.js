/* Pancake maker step 1:  */
const pancake = document.querySelector('#type');
const priceBanner = document.querySelector('.price-banner');
const priceDisplay = document.querySelector('.price-display');
const extra_toppings = document.querySelectorAll('input[type=checkbox]');

const button = document.querySelector('#submit');

/* Step 2 */
const radios = document.querySelectorAll('input[type=radio]');
const seeOrder = document.querySelector('#seeOrder');
const order = {Name: '', Pancake: '', Toppings: '', Delivery_Method: '', Total_Price: ''};
let isDeliverSelected = false;
let isChanged = false;

//console.log(pancake.value);
let totalPrice = parseInt(pancake.value);

order.Pancake = 'Classic - $5';

console.log(order);
/* If Pancake is select */

pancake.addEventListener('change', function(){
  totalPrice = parseInt(pancake.value);
  priceBanner.textContent = `$${pancake.value}`;
  priceDisplay.querySelector('#totalPrice').textContent = `$${pancake.value}`;
  order.Pancake = `${pancake.text}`;
  console.log(order);
});


/* If toppings are selected */

extra_toppings.forEach((topping) => {
  topping.addEventListener('click', () => {
      if(topping.checked) {
        totalPrice = totalPrice + parseInt(topping.value);
        priceBanner.textContent = `$${totalPrice}`;
        priceDisplay.querySelector('#totalPrice').textContent = `$${totalPrice}`;
    
      }else{
        totalPrice = totalPrice - parseInt(topping.value);
        priceBanner.textContent = `$${totalPrice}`;
        priceDisplay.querySelector('#totalPrice').textContent = `$${totalPrice}`;
      }
  
  });
});


/* If Order (radio buttons) options selected */
button.addEventListener('click', function() {
  for (let radio of radios) {
    if (radio.checked && radio.id === 'deliver') {
      if(!isDeliverSelected) {
        if(radio.value === '5') {
          totalPrice = totalPrice + parseInt(radio.value);
          priceBanner.textContent = `$${totalPrice}`;
          priceDisplay.querySelector('#totalPrice').textContent = `$${totalPrice}`;
          isDeliverSelected = true;
        }
      }
     
    }else if(radio.checked && radio.id != 'deliver' && isDeliverSelected) {  
        totalPrice = totalPrice - 5;
        priceBanner.textContent = `$${totalPrice}`;
        priceDisplay.querySelector('#totalPrice').textContent = `$${totalPrice}`;
        isDeliverSelected = false;
    }
    //orderlist.push(radio.value);   ... have add this line and also if order list change need to change in array also
  }

});

seeOrder.addEventListener('click', () => {
  // 
});





/*
   Bug 1:  unchecked checkbox while changing select type (pancake).
*/