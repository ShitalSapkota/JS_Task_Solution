/* 
Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.

*/

const parentlist = document.querySelector('#fruitList');
const input = document.querySelector('#fruitInput');
const button = document.querySelector('#addFruitBtn');

function addSomething(){
    //console.log(input.value);
    const newChildlist = document.createElement('li');
    newChildlist.textContent = input.value;
    parentlist.appendChild(newChildlist)
    input.value = ''
}

button.addEventListener('click', addSomething);
